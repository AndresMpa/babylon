const statusMessage = {
  200: 'Done',
  201: 'Created',
  400: 'Invalid format',
  500: 'Internal error',
};

function success(req, res, data, status = 200) {
  console.log(`[Request]: ${message}`);
  const message = data || statusMessage[status];

  res.status(status).send({
    response: message,
  });
}

function error(req, res, data, status = 500) {
  console.error(`[ERROR: response.error]: ${message}`);
  const message = data || statusMessage[status];
  res.status(status).send({
    error: message,
  });
}

module.exports = {
  success,
  error,
};
