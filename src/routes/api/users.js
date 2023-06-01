const { Router } = require("express");
const router = Router();
const {users: ctrl} = require('../../controllers')

const {
  authorizationCheck,
  orderValidation,
} = require("../../middlewares");


router
  .get("/current", authorizationCheck, ctrl.getCurrentUser)
  .get("/order", authorizationCheck, ctrl.getOrderUser)
  .patch("/order", authorizationCheck,  orderValidation, ctrl.addItemToCart)

module.exports = router;
