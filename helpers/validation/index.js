const { validationResult } = require("express-validator");

const validationErrorHandler = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

  console.log(extractedErrors);

  let msg = "";
  msg = msg + Object.values(extractedErrors[0])[0];

  return res.status(400).json({
    success: false,
    msg,
  });
};

module.exports = validationErrorHandler;
