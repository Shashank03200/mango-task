const { body } = require("express-validator");

const addProductValidation = [
  body("productTitle")
    .exists({ checkFalsy: true })
    .withMessage("Please enter the product title"),
  body("productPrice")
    .exists({ checkFalsy: true })
    .withMessage("Please enter the product price")
    .isNumeric(),
  body("discount")
    .exists({ checkFalsy: true })
    .withMessage("Please enter discount")
    .isNumeric(),
  body("ram")
    .exists({ checkFalsy: true })
    .withMessage("Please enter RAM size")
    .isNumeric(),
  body("colors")
    .exists({ checkFalsy: true })
    .withMessage("Please enter colors"),
  body("brand")
    .exists({ checkFalsy: true })
    .withMessage("Please enter brand name"),
  body("quantity")
    .exists({ checkFalsy: true })
    .withMessage("Please enter quantity"),
  body("processor")
    .exists({ checkFalsy: true })
    .withMessage("Please enter processor"),
  body("warrantyDuration")
    .exists({ checkFalsy: true })
    .withMessage("Please provide warranty duration"),
];

module.exports = addProductValidation;
