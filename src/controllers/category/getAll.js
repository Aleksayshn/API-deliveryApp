const {
  getAllCategories,
} = require("../../services/categoryServices/category");

const getAll = async (req, res) => {

  const categories = await getAllCategories();

  res.status(200).json(categories);
};

module.exports = getAll;