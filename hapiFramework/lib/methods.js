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

async function getLast(amount) {
  let data;
  try {
    data = await questions.getLast(amount);
  } catch (error) {
    console.error(error);
  }

  return data;
}

module.exports = {
  setRightAnswer: setRightAnswer,
  getLast: getLast,
};
