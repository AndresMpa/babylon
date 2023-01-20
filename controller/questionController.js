const { v4: uuidv4 } = require("uuid");

const { questions } = require("../models");

const { writeFile } = require("fs");
const { join } = require("path");

async function createQuestion(req, h) {
  if (!req.state.user) {
    return h.redirect("/login");
  }

  try {
    const imageContent = Buffer.from(req.payload.image);
    let filename;

    if (Buffer.isBuffer(imageContent)) {
      filename = `${uuidv4()}.png`;

      await writeFile(
        join(__dirname, "..", "public", "uploads", filename),
        req.payload.image,
        (error) => {
          console.error(error);
        }
      );
    }

    await questions.create(req.payload, req.state.user, filename);

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
        user: req.state.user,
      })
      .code(500)
      .takeover();
  }
}

async function answerQuestion(req, h) {
  if (!req.state.user) {
    return h.redirect("/login");
  }

  try {
    await questions.answer(req.payload, req.state.user);
    return h.redirect(`/question/${req.payload.id}`);
  } catch (error) {
    console.error(error);
  }
}

async function setRightAnswer(req, h) {
  if (!req.state.user) {
    return h.redirect("/login");
  }
  try {
    await req.server.methods.setRightAnswer(
      req.params.questionId,
      req.params.answerId,
      req.state.user
    );

    return h.redirect(`/question/${req.params.questionId}`);
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  createQuestion: createQuestion,
  answerQuestion: answerQuestion,
  setRightAnswer: setRightAnswer,
};
