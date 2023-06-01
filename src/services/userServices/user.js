const User = require("./userSchemas");

const checkingDoesEmailInUse = (email) => User.findOne({ email });

const registerUser = (credentials) => User.create(credentials);

const logInUser = (credentials) => User.findOne(credentials);

const setToken = (id, { token }) => User.findByIdAndUpdate(id, { token });

const getOrderstByIdUser = (id) => User.findById(id);

const updateOrderHistory = (id, order) => User.findByIdAndUpdate(
    id,
    order,
    { returnDocument: "after" }
  );

module.exports = {
  checkingDoesEmailInUse,
  registerUser,
  logInUser,
  setToken,
  getOrderstByIdUser,
  updateOrderHistory,
};
