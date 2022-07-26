const TABLE = "auth";

module.exports = function (injectedStore) {
  let store = injectedStore;
  if (!store) {
    store = require("../../../store/dummy");
  }

  function upsert(data) {
    const authData = {
      id: data.id,
    };

    if (data.username) {
      authData.username = data.username;
    }
    if (data.password) {
      authData.username = data.password;
    }

    return store.upsert(TABLE, authData);
  }

  return {
    upsert,
  };
};
