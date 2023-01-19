const questions = require("../models");

async function setRightAnswer(questionId, answerId, user) {
  try {
    //const result =
    await questions.setRightAnswer(questionId, answerId, user);
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  setRightAnswer: setRightAnswer,
};
