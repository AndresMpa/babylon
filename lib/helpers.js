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

  handlebars.registerHelper("ifEquals", (current, target, options) => {
    if(current === target) {
      return options.fn(this)
    } else {
      return options.inverse(this)
    }
  });

  return handlebars;
}

module.exports = registerHelpers();
