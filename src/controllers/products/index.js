const { asyncControlersWrapper } = require("../../helpers");
const getAll = require("./getAll");
  
module.exports = {
  getAll: asyncControlersWrapper(getAll),
};