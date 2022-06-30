const { query } = require("express-validator");

const productListValidation = [
  query("page").exists().withMessage("Invalid request params"),
  query("count").exists().withMessage("Invalid request params"),
];

module.exports = productListValidation;
