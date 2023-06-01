const {
  getAllProducts,
} = require("../../services/productsServices/products");

const getAll = async (req, res) => {

  const products = await getAllProducts();

  res.status(200).json(products);
};

module.exports = getAll;