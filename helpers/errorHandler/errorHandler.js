const errorHandler = (err, req, res, next) => {
  const statusCode = err.status || 500;
  const errorMessage =
    err.status === 500 ? err.message : "Something went wrong";
  console.log(err);

  res.status(statusCode).json({
    success: false,
    msg: errorMessage,
  });
};

module.exports = errorHandler;
