const handlebars = require("handlebars");

function registerHelpers() {
  handlebars.registerHelper("answerNumber", (answers) => {
    console.log(answers);

    if (!answers) {
      return 0;
    }

    const keys = Object.keys(answers).length;
    return keys;
  });

  return handlebars
}

module.exports = registerHelpers()
