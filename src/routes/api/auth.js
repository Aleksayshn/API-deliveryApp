const { Router } = require("express");
const router = Router();
const {auth: ctrl} = require('../../controllers')

const {
  authValidation,
  loginValidation,
  authorizationCheck,
} = require("../../middlewares");


router
  .post("/signup", authValidation, ctrl.signUp)
  .post("/login", loginValidation, ctrl.signIn)
  .post("/logout", authorizationCheck, ctrl.logOut)

module.exports = router;
