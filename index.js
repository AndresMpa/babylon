const Hapi = require("@hapi/hapi");
const inert = require("@hapi/inert");
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
    server.route({
      method: "GET",
      path: "/home",
      handler: (req, h) => {
        return h.file("index.html").code(200);
      },
    });

    server.route({
      method: "GET",
      path: "/{param*}",
      handler: {
        directory: {
          path: ".",
          index: ["index.html"],
        },
      },
    });

    await server.start();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }

  console.log(`Server running on: ${server.info.uri}`);
}

init();
