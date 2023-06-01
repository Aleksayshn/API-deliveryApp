const Product = require("./productsSchemas");

const getAllProducts = () => Product.find();

const getProductById = (productId) => Product.findById(productId);

module.exports = {
  getAllProducts,
  getProductById,
};
