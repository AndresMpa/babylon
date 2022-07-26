const mysql = require("mysql");
const config = require("../config");

const dbConf = {
  host: config.db.host,
  user: config.db.user,
  password: config.db.password,
  database: config.db.database,
};

let connection;

function handleDbConnection() {
  connection = mysql.createConnection(dbConf);

  connection.connect((error) => {
    if (error) {
      console.error(`[DATA BASE ERROR] ${error}`);
      setTimeout(handleDbConnection, 2000);
    } else {
      console.log("[DATA BASE]: Connection created succesfully");
    }
  });

  connection.on("error", (error) => {
    console.error(`[DATA BASE ERROR] ${error}`);
    if (error.code === "PROTOCOL_CONNECTION_LOST") {
      handleDbConnection();
    } else {
      throw error;
    }
  });
}

handleDbConnection();

function list(table) {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM ${table}`, (error, data) => {
      return error ? reject(error) : resolve(data);
    });
  });
}

module.exports = {
  list,
};
