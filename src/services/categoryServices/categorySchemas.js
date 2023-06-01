const { Schema, model } = require("mongoose");

const category = new Schema(
  {
    categoryName: String,
    description: String,
    categoryImage: String,
  },
  { versionKey: false }
);

const Category = model("category", category);

module.exports = Category;
