//Hapi plugins
const handlebars = require("./lib/helpers");
const hapiDevError = require("hapi-dev-errors");
const scooter = require("@hapi/scooter");
const vision = require("@hapi/vision");
const inert = require("@hapi/inert");
const crumb = require("@hapi/crumb");
const blankie = require("blankie");
const Hapi = require("@hapi/hapi");
const laabr = require("laabr");

// Configuration files
const config = require("./config");

// Controllers
const siteController = require("./controller/siteController.js");

// Server methods
const methods = require("./lib/methods");

// Routes object
const routes = require("./routes");

// Other dependencies
const path = require("path");

// Server creation
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
    // HTML
    await server.register([inert, vision]);

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
    // SSRF - CRSF
    await server.register({
      plugin: crumb,
      options: {
        cookieOptions: {
          isSecure: config.env === "production",
        },
      },
    });
    // XSS
    await server.register(scooter);
    await server.register({
      plugin: blankie,
      options: {
        defaultSrc: `'self' 'unsafe-inline'`,
        fontSrc: `'self' 'unsafe-inline' data:`,
        styleSrc: `'self' 'unsafe-inline' https://maxcdn.bootstrapcdn.com`,
        scriptSrc: `'self' 'unsafe-inline' 'unsafe-eval' https://cdnjs.cloudflare.com https://maxcdn.bootstrapcdn.com/ https://code.jquery.com/`,
        generateNonces: false,
      },
    });

    // Debug
    await server.register({
      plugin: hapiDevError,
      options: {
        showErrors: config.env === "production",
      }
    })

    // Server methods
    await server.method("setRightAnswer", methods.setRightAnswer);
    await server.method("getLast", methods.getLast, {
      cache: {
        expiresIn: 1000 * 60,
        generateTimeout: 1000 * 2,
      },
    });

    // State global vars
    server.state("user", {
      ttl: 1000 * 60 * 60 * 24 * 7,
      isSecure: config.env === "production",
      encoding: "base64json",
      path: "/",
    });

    // Views
    server.views({
      engines: { hbs: handlebars },
      relativeTo: __dirname,
      path: `templates`,
      layout: true,
      layoutPath: "templates",
    });

    // Hapi life cycle
    server.ext("onPreResponse", siteController.assetNotFound);

    // Adding routes
    server.route(routes);

    // Stating Hapi server
    await server.start();
  } catch (error) {
    server.log("error", "On server initialization", error.message, error);

    process.exit(1);
  }

  // Server logger
  server.log("info", `Server running on: ${server.info.uri}`);
}

// Default node process error management
process.on("unhandledRejection", (error) => {
  server.log("error", "Unhandled rejection", error.message, error);
});

process.on("unhandledException", (error) => {
  server.log("error", "Unhandled exception", error.message, error);
});

init();
