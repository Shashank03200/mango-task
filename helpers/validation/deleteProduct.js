const { param } = require("express-validator");

const deleteProductValidation = [
  param("productID", "Please provide a product ID"),
];

module.exports = deleteProductValidation;
