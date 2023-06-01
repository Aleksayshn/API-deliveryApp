const { isValidObjectId } = require('mongoose');
const { HttpError } = require("../helpers");

const isValidIdParams = (req, _, next) => {
  const id = req.params.categoryId;

  if (!id || !isValidObjectId(id))  
  {
    const error = HttpError(404, `Invalid id`)
    next(error);
    }
  next();
};

module.exports = isValidIdParams;
