const router = require("express").Router();

const smartphoneController = require("../controller/smartphone");

const addProductValidation = require("../helpers/validation/addProduct");
const deleteProductValidation = require("../helpers/validation/deleteProduct");
const productListValidation = require("../helpers/validation/getProductList");
const validationErrorHandler = require("../helpers/validation/index");

router.get(
  "/:productID",
  deleteProductValidation,
  validationErrorHandler,
  smartphoneController.getProduct
);

router.post(
  "/new",
  addProductValidation,
  validationErrorHandler,
  smartphoneController.addProduct
);

router.put("/:productID", smartphoneController.updateProduct);

router.delete(
  "/:productID",
  deleteProductValidation,
  validationErrorHandler,
  smartphoneController.deleteProduct
);

module.exports = router;
