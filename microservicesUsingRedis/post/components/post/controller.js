const TABLE = "post";

module.exports = function (injectedStore, injectedCache) {
  let store = injectedStore;
  let cache = injectedCache;
  if (!store) {
    store = require("../../../store/dummy");
  }
  if (!cache) {
    store = require("../../../store/dummy");
  }

  async function list() {
    return store.list(TABLE);
  }

  return {
    list,
  };
};
