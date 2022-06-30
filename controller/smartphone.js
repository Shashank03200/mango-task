const Smartphone = require("../model/Smartphone");

const filterResults = require("../helpers/filterResults");

const getProductList = async (req, res, next) => {
  const foundList = await filterResults(req);

  res.json({
    success: true,
    data: foundList,
  });
};

const getProduct = async (req, res, next) => {
  try {
    const prodcutID = req.params.prodcutID;
    const foundProduct = await Smartphone.findById(prodcutID);

    if (!foundProduct) {
      return res.status(400).json({
        success: false,
        msg: "Product Not Found",
      });
    }

    res.status(200).json({
      success: true,
      msg: "Product found",
      data: foundProduct,
    });
  } catch (error) {
    next(error);
  }
};

const addProduct = async (req, res, next) => {
  try {
    const _smartphone = new Smartphone(req.body);

    await _smartphone.save();

    res.status(200).json({
      success: true,
      data: {
        _smartphone,
      },
      msg: "Product added",
    });
  } catch (err) {
    next(err);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const productID = req.params.productID;

    const updatedProduct = await Smartphone.findOneAndUpdate(
      { _id: productID },
      req.body,
      { returnDocument: "after" }
    )
      .lean()
      .exec();

    if (!updatedProduct) {
      return res.status(400).json({
        success: false,

        msg: "Product Not Found",
      });
    }

    res.status(200).json({
      success: true,
      data: {
        updatedProduct,
      },
      msg: "Product updated",
    });
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const productID = req.params.productID;
    const foundProduct = await Smartphone.findOne({ _id: productID })
      .lean()
      .exec();
    await Smartphone.findByIdAndDelete(productID);

    if (!foundProduct) {
      return res.status(400).json({
        success: true,

        msg: "Product Not Found",
      });
    }

    res.status(200).json({
      success: true,
      data: {
        foundProduct,
      },
      msg: "Product Deleted",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addProduct,
  updateProduct,
  deleteProduct,
  getProductList,
  getProduct,
};
