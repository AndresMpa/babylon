const config = require("../config");
const redis = require("redis");

const client = redis.createClient({
  socket: {
    host: config.cache.host,
    port: config.cache.port,
  },
  password: config.cache.host,
});

function list(table) {
  return new Promise((resolve, reject) => {
    client.get(table, (error, data) => {
      if (error) {
        return reject(err);
      }

      let result = data || null;
      if (data) {
        result = JSON.parse(data);
      }
      resolve(result);
    });
  });
}

function get(table, id) {
  const key = `${table}_${id}`;
  return list(key);
}

async function upsert(table, data) {
  let key = table;
  if (data && data.id) {
    key = `${key}_${data.id}`;
  }

  client.setex(key, 10, JSON.stringify(data));
  return true;
}

module.exports = {
  list,
  get,
  upsert,
};
