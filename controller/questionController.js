const { questions } = require("../models");

async function createQuestion(req, h) {
  let result;

  try {
    result = await questions.createQuestion(req.payload, req.state.user);
    return h.response(`Question ${result.ID} created successfully`);
  } catch (error) {
    console.error(error);

    return h
      .view("ask", {
        title: "Create questions",
        error:
          "Server got some troubles creating your question, please try again later",
      })
      .code(500)
      .takeover();
  }
}

module.exports = {
  createQuestion: createQuestion,
};
