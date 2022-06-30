const mongoose = require("mongoose");

const smartphoneSchema = new mongoose.Schema({
  productTitle: {
    type: String,
    required: true,
  },
  productPrice: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  ram: {
    type: Number,
    required: true,
  },
  internalStorage: {
    type: String,
    required: true,
  },
  colors: {
    type: Array,
    default: [],
  },
  brand: {
    required: true,
    type: String,
  },
  quantity: {
    type: Number,
    required: true,
  },
  camera: {
    primary: {
      available: Boolean,
      megapixel: String,
    },

    front: {
      available: Boolean,
      megapixel: String,
    },

    macro: {
      available: Boolean,
      megapixel: String,
    },

    wideangle: {
      available: Boolean,
      megapixel: String,
    },
  },
  battery: Number,
  processor: {
    type: String,
    required: true,
  },
  screenSize: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    maxLength: 5,
    minLength: 0,
    default: 0,
  },
  warrantyDuration: {
    type: String,
    required: true,
  },
});

const smartphoneModel = new mongoose.model("SmartphoneModel", smartphoneSchema);

module.exports = smartphoneModel;
