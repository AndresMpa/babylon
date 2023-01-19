class QuestionModel {
  constructor(database) {
    this.database = database;
    this.reference = this.database.ref("/");
    this.collection = this.reference.child("questions");
  }

  create(data, user) {
    data = { ...data };
    data.owner = user;

    const question = this.collection.push();
    question.set(data);

    return question.key;
  }

  async getLast(amount) {
    const query = await this.collection.limitToLast(amount).once("value");
    const data = query.val()

    return data
  }
}

module.exports = QuestionModel;
