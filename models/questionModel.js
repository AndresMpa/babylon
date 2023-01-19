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
    const data = query.val();

    return data;
  }

  async getOne(id) {
    const query = await this.collection.child(id).once("value");
    const data = query.val();

    return data;
  }

  async answer(data, user) {
    const answers = await this.collection
      .child(data.id)
      .child("answers")
      .push();

    answers.set({ text: data.answer, user: user });

    return answers;
  }

  async setRightAnswer(questionId, answerId, user) {
    const query = await this.collection.child(questionId).once("value");
    const question = query.val();
    const answers = question.answers;

    if (!user.email === question.owner.email) {
      return false;
    }

    let key;
    for (key in answers) {
      answers[key].correct = key === answerId;
    }

    const update = await this.collection
      .child(questionId)
      .child("answers")
      .update(answers);

    return update;
  }
}

module.exports = QuestionModel;
