const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
  productName: String,
  price: Number,
  productImage: String,
  color: String,
});

const ProductModel = mongoose.model("Products", ProductsSchema);
module.exports = ProductModel;
