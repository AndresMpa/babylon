const handlebars = require("handlebars");
const vision = require("@hapi/vision");
const inert = require("@hapi/inert");
const Hapi = require("@hapi/hapi");

const routes = require("./routes");

const path = require("path");

const server = Hapi.server({
  port: process.env.PORT || 3000,
  host: "localhost",
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

    server.views({
      engines: { hbs: handlebars },
      relativeTo: __dirname,
      path: `templates`,
      layout: true,
      layoutPath: "templates",
    });

    server.route(routes);

    await server.start();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }

  console.log(`Server running on: ${server.info.uri}`);
}

init();
