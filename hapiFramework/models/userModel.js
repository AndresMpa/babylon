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

  async validateCredentials(data) {
    const userQuery = await this.collection
      .orderByChild("email")
      .equalTo(data.email)
      .once("value");

    const userFound = userQuery.val();

    if (userFound) {
      const userId = Object.keys(userFound)[0];

      const passwordRigth = await bcrypt.compare(
        data.password,
        userFound[userId].password
      );

      const result = passwordRigth ? userFound[userId] : false;

      return result;
    } else {
      return false;
    }
  }

  static async encrypt(password) {
    const saltRound = 10;
    const hashedPassword = await bcrypt.hash(password, saltRound);

    return hashedPassword;
  }
}

module.exports = UserModel;
