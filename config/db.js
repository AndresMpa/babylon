const { config } = require('./index');
const db = require('mongoose');

db.Promise = global.Promise;
async function connect() {
  await db.connect(
    config.uri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (error) => {
      if (error) {
        console.error(
          `[ERROR: Unable to connect]: New mongoose connection failed: ${error}`
        );
      }
    }
  );
}

module.exports = connect;
