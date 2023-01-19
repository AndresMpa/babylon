const { questions } = require("../models");

async function setRightAnswer(questionId, answerId, user) {
  let result;
  try {
    result = await questions.setRightAnswer(questionId, answerId, user);
  } catch (error) {
    console.error(error);
    return false;
  }

  return result;
}

module.exports = {
  setRightAnswer: setRightAnswer,
};
