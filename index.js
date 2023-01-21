const handlebars = require("./lib/helpers");
const vision = require("@hapi/vision");
const inert = require("@hapi/inert");
const crumb = require("@hapi/crumb");
const Hapi = require("@hapi/hapi");
const laabr = require("laabr");

const config = require("./config")

const siteController = require("./controller/siteController.js");
const methods = require("./lib/methods");

const routes = require("./routes");

const path = require("path");

const server = Hapi.server({
  port: process.env.PORT || 3000,
  host: "localhost",
  debug: false,
  routes: {
    files: {
      relativeTo: path.join(__dirname, "public"),
    },
  },
});

async function init() {
  try {
    await server.register(inert);
    await server.register(vision);

    // Loggers
    await server.register({
      plugin: laabr,
      options: {
        formats: { onPostStart: ":time :start :level :message" },
        tokens: { start: () => "[start]" },
        indent: 0,
      },
    });

    // Plugins
    await server.register({
      plugin: require("./lib/api"),
      options: {
        prefix: "api",
      },
    });

    // OWASP
    await server.register({
      plugin: crumb,
      options: {
        cookieOptions: {
          isSecure: config.env === "production",
        },
      },
    });

    await server.method("setRightAnswer", methods.setRightAnswer);
    await server.method("getLast", methods.getLast, {
      cache: {
        expiresIn: 1000 * 60,
        generateTimeout: 1000 * 2,
      },
    });

    server.state("user", {
      ttl: 1000 * 60 * 60 * 24 * 7,
      isSecure: config.env === "production",
      encoding: "base64json",
      path: "/",
    });

    server.views({
      engines: { hbs: handlebars },
      relativeTo: __dirname,
      path: `templates`,
      layout: true,
      layoutPath: "templates",
    });

    server.ext("onPreResponse", siteController.assetNotFound);

    server.route(routes);

    await server.start();
  } catch (error) {
    server.log("error", "On server initialization", error.message, error);

    process.exit(1);
  }

  server.log("info", `Server running on: ${server.info.uri}`);
}

process.on("unhandledRejection", (error) => {
  server.log("error", "Unhandled rejection", error.message, error);
});

process.on("unhandledException", (error) => {
  server.log("error", "Unhandled exception", error.message, error);
});

init();
