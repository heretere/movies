const errorHandler = (error, req, res, _) => {
  const { status = 500, message = "An error occurred" } = error;
  console.error(error);

  return res.status(status).json({ error: message });
};

module.exports = errorHandler;
