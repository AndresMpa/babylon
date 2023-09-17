const auth = require("../../../auth");
const bcrypt = require("bcrypt");

const TABLE = "auth";

module.exports = function (injectedStore, injectedCache) {
  let store = injectedStore;
  let cache = injectedCache;
  if (!store) {
    store = require("../../../store/dummy");
  }
  if (!cache) {
    store = require("../../../store/dummy");
  }

  async function login(username, password) {
    const data = await store.searchQuery(TABLE, { username: username });
    return bcrypt.compare(password, data.password).then((signed) => {
      if (signed) {
        return auth.sign(data);
      } else {
        throw new Error("Invalid information");
      }
    });
  }

  async function upsert(data) {
    const authData = {
      id: data.id,
    };

    if (data.username) {
      authData.username = data.username;
    }

    if (data.password) {
      authData.password = await bcrypt.hash(data.password, 8);
    }

    return store.upsert(TABLE, authData);
  }

  return {
    login,
    upsert,
  };
};
