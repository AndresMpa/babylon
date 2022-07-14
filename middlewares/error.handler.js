const { ValidationError } = require('sequelize');

function logError(error, req, res, next) {
  console.error(error);
  next(error);
}

function errorHandler(error, req, res, next) {
  res.status(500).json({
    message: error.message,
    stack: error.stack,
  });
}

function boomErrorHandler(error, req, res, next) {
  if (error.isBoom) {
    const { output } = error;
    res.status(output.statusCode).json(output.payload);
  }
  next(error);
}

function sequelizeErrorHandler(error, req, res, next) {
  if (error instanceof ValidationError) {
    res.status(409).json({
      statusCode: 409,
      message: error.message,
      errors: error.errors,
    });
  }
  next(error);
}

module.exports = {
  sequelizeErrorHandler,
  boomErrorHandler,
  errorHandler,
  logError,
};
