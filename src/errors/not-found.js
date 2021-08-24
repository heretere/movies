const errorHandler = (req, res, next) => {
  return next({
    status: 404,
    message: `Path not found: ${req.originalUrl}`,
  });
};

module.exports = errorHandler;
