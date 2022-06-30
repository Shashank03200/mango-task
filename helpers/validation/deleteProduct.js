const { param } = require("express-validator");

const deleteProductValidation = [
  param("productID")
    .exists({
      checkFalsy: true,
    })
    .withMessage("Please provide the product ID"),
];

module.exports = deleteProductValidation;
