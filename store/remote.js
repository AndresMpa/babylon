const axios = require("axios");

function createRemoteDB(host, port) {
  const URL = `http://${host}:${port}`;

  function handleRequest(method, table, data) {
    const config = {
      method,
      url: `${URL}/${table}`,
      data: data || null,
    };
    return new Promise((resolve, reject) => {
      axios(config)
        .then((response) => {
          resolve(response.data.response);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  function list(table) {
    return handleRequest("GET", table);
  }

  function get(table, id) {
    return handleRequest("POST", table, id);
  }

  function upsert(table, data) {
    return handleRequest("PUT", table, data);
  }

  function searchQuery(table, query, join) {
    return handleRequest("PUT", table, data);
  }
  return {
    get,
    list,
    upsert,
    searchQuery,
  };
}

module.exports = createRemoteDB;
