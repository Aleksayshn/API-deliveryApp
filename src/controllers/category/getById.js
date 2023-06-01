const {
  getCategoryById,
} = require("../../services/categoryServices/category");
const { HttpError } = require("../../helpers");


const getById = async (req, res) => {
  const { categoryId } = req.params;

  const category = await getCategoryById({ _id: categoryId });

  if (!category) throw HttpError(404, "Not found");

  res.status(200).json({
    category
  });
};

module.exports = getById;