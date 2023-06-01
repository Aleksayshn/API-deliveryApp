const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const user = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "Set Name"],
    },
    lastName: {
      type: String,
      required: [true, "Set lastName"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    orders: {
      type: Array,
      default: [],
    },
    token: {
      type: String,
      default: null,
    },
    avatarURL: String,
  },
  { versionKey: false }
);

user.methods.setPassword = function(password){
    this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

user.methods.comparePassword = function(password){
    return bcrypt.compareSync(password, this.password);
}


const User = model("user", user);

module.exports = User;
