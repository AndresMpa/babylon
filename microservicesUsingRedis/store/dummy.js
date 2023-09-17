const db = {
  user: [],
};

async function list(table) {
  return db[table] || [];
}

async function get(table, id) {
  let dataTable = await list(table);
  return dataTable.filter((item) => item.id === id)[0] || null;
}

async function upsert(table, data) {
  if (!db[table]) {
    db[table] = [];
  }

  db[table].push(data);
}

async function remove(table, id) {
  let item = await get(table, id);
  if (item) {
    db[table].splice(db[table].indexOf(item), 1);
    return true;
  } else {
    return false;
  }
}

async function searchQuery(table, query) {
  let dataTable = await list(table);
  let keys = Object.keys(query);
  let key = keys[0];

  return dataTable.filter((item) => item[key] === query[key])[0] || null;
}

module.exports = {
  list,
  get,
  upsert,
  remove,
  searchQuery,
};
