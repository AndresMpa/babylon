function errorGenerator(message, defaultStatusCode) {
  let errorMessage = new Error(message);

  if (defaultStatusCode) {
    errorMessage.statusCode = defaultStatusCode;
  }

  return errorMessage;
}

module.exports = errorGenerator;
