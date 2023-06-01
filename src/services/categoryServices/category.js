const Category = require("./categorySchemas");

const getAllCategories = () => Category.find();

const getCategoryById = (categoryId) => Category.findById(categoryId);


module.exports = {
  getAllCategories,
  getCategoryById,
};
