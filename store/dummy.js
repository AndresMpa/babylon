const db = {
  user: [
    { id: "1", name: "AndresMpa" },
    { id: "2", name: "Mappa" },
    { id: "3", name: "Testman" },
  ],
};

async function list(table) {
  return db[table];
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
    table.pop(item);

    return true;
  } else {
    return false;
  }
}

module.exports = {
  list,
  get,
  upsert,
  remove,
};
