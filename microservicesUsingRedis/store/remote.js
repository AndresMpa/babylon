const axios = require("axios");

function createRemoteDB(host, port) {
  const URL = `http://${host}:${port}`;

  function handleRequest(method, table, data) {
    let url = `${URL}/${table}`;
    if (method === "GET" && data) {
      url += `/${data}`;
    }
    const config = {
      method,
      url,
      data,
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
    return handleRequest("GET", table, id);
  }

  function insert(table, data) {
    return handleRequest("POST", table, data);
  }

  function update(table, data) {
    return handleRequest("PUT", table, data);
  }

  async function upsert(table, data) {
    let row = [];

    if (data.id) {
      row = await get(table, data.id);
    }

    if (row.length === 0) {
      return insert(table, data);
    } else {
      return update(table, data);
    }
  }

  function searchQuery(table, query, join) {
    return handleRequest("POST", table + "/query", { query, join });
  }

  return {
    get,
    list,
    upsert,
    insert,
    searchQuery,
  };
}

module.exports = createRemoteDB;
