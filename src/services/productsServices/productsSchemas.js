const { Schema, model } = require("mongoose");

const product = new Schema(
  {
    productName: String,
    description: String,
    productImage: String,
    price: String,
    discounted_price: String,
    category_name: String,
    category: String,
    availability: Boolean,
    delivery_time: String,
    rating: String,
  },
  { versionKey: false }
);

const Product = model("product", product);

module.exports = Product;
