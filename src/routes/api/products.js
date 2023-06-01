const { Router } = require("express");
const router = Router();
const { products: ctrl } = require('../../controllers')

router
  .get("/", ctrl.getAll)

module.exports = router;
