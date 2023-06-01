const { asyncControlersWrapper } = require("../../helpers");
const getAll = require("./getAll");
const getById = require("./getById");
  
module.exports = {
  getAll: asyncControlersWrapper(getAll),
  getById: asyncControlersWrapper(getById),
};