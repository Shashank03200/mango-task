const { query } = require("express-validator");

const productListValidation = [
  query("page")
    .exists({ checkFalsy: true })
    .withMessage("Query Parameter page is required"),
  query("count")
    .exists({ checkFalsy: true })
    .withMessage("Invalid request params"),
];

module.exports = productListValidation;
