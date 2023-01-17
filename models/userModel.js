const bcrypt = require("bcrypt");

class UserModel {
  constructor(database) {
    this.database = database;
    this.reference = this.database.ref("/");
    this.collection = this.reference.child("users");
  }

  async create(data) {
    data = { ...data };

    data.password = await this.constructor.encrypt(data.password);
    const newUser = this.collection.push();
    newUser.set(data);

    return newUser.key;
  }

  static async encrypt(password) {
    const saltRound = 10;
    const hashedPassword = await bcrypt.hash(password, saltRound);

    return hashedPassword;
  }
}

module.exports = UserModel;
