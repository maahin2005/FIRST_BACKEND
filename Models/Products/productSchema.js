const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  createdAt: { type: Date, default: new Date() },
  userID: { type: String },
  username: { type: String },
});

const ProductModel = mongoose.model("Product", productSchema);

module.exports = ProductModel;
