function success(req, res, message, status) {
  res.status(status).send({
    message: message,
  });
}

function error(req, res, message, status) {
  res.status(status).send({
    error: message,
  });
}

module.exports = {
  success,
  error,
};
