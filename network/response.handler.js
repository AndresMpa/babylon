function success(req, res, message, status) {
  console.log(`[Request]: ${message}`);

  res.status(status).send({
    message: message,
  });
}

function error(req, res, message, status) {
  console.error(`[ERROR: response.error]: ${message}`);

  res.status(status).send({
    error: message,
  });
}

module.exports = {
  success,
  error,
};
