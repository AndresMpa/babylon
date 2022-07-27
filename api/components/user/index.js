const store = require("../../../store/remote-mysql");
const controller = require("./controller");

module.exports = controller(store);
