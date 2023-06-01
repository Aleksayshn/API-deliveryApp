// const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
const  User = require('../../services/userServices/userSchemas')

const {
  checkingDoesEmailInUse,
  registerUser,
} = require("../../services/userServices/user");
const { HttpError } = require("../../helpers");

const signUp = async (req, res) => {
  const {firstName, lastName, email, password } = req.body;

  const userEmail = await checkingDoesEmailInUse(email);
  if (userEmail) throw HttpError(409, `User with ${email} already exist`);

  const avatarURL = gravatar.url(email);

  const newUser = new User({
    firstName,
    lastName,
    email,
    avatarURL,
    orders: [],
  });
    newUser.setPassword(password)

  const result = await registerUser(newUser);
  return res.status(201)
  // .set('Content-Type', 'application/json')
    .json({
      status: 'success',
      code: 201,
      data: {
        user: {
          email: result.email,
          avatarURL: result.avatarURL,
            } 
        }
    });
};

module.exports = signUp; 