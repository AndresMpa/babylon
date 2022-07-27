const { nanoid } = require("nanoid");
const auth = require("../auth");

const TABLE = "user";

module.exports = function (injectedStore, injectedCache) {
  let store = injectedStore;
  let cache = injectedCache;
  if (!store) {
    store = require("../../../store/dummy");
  }
  if (!cache) {
    store = require("../../../store/dummy");
  }

  function list() {
    return store.list(TABLE);
  }

  function get(id) {
    return store.get(TABLE, id);
  }

  async function upsert(data) {
    const user = {
      name: data.name,
      username: data.username,
    };

    if (data.id) {
      user.id = data.id;
    } else {
      user.id = nanoid();
    }

    if (data.password || data.username) {
      await auth.upsert({
        id: user.id,
        username: user.username,
        password: data.password,
      });
    }

    return store.upsert(TABLE, user);
  }

  function remove(id) {
    return store.remove(TABLE, id);
  }

  function follow(from, to) {
    return store.upsert(`${TABLE}_follow`, {
      user_from: from,
      user_to: to,
    });
  }

  async function following(user) {
    const join = {};
    join[TABLE] = "user_to";
    const query = { user_from: user };
    return await store.searchQuery(`${TABLE}_follow`, query, join);
  }

  return {
    following,
    follow,
    remove,
    upsert,
    list,
    get,
  };
};
