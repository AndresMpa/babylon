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
}

module.exports = QuestionModel;
