const { Router } = require("express");
const router = Router();
const { category: ctrl } = require('../../controllers')

const { isValidIdParams } = require("../../middlewares");

router
  .get("/", ctrl.getAll)
  .get("/:categoryId", isValidIdParams, ctrl.getById)

module.exports = router;
