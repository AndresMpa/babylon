const TABLE = "post";

module.exports = function (injectedStore) {
  let store = injectedStore;
  if (!store) {
    store = require("../../../store/dummy");
  }

  async function list() {
    return store.list(TABLE);
  }

  return {
    list,
  };
};
