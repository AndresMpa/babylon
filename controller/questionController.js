const { questions } = require("../models");

async function createQuestion(req, h) {
  try {
    await questions.create(req.payload, req.state.user);
    return h.view("ask", {
      title: "Create questions",
      success: `Question created successfully`,
      user: req.state.user,
    });
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
