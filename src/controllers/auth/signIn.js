const jwt = require("jsonwebtoken");

const {
  logInUser,
  setToken,
} = require("../../services/userServices/user");
const { HttpError } = require("../../helpers");

require('dotenv').config();
const { JWT_SECRET } = process.env;

const signIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await logInUser({ email });

  if (!user || !user.comparePassword(password)) {
        console.log('Comparing passwords:', password, this.password);

        throw HttpError(401, "Email or password is wrong");
    }

  const payload = {
        id: user._id
  }
  
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "5h" });
  await setToken(user._id, { token });

  req.user = user;
  
  res.status(200).json({
        status: "success",
        code: 200, 
        data: {
          token,
          user: {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            avatarURL: user.avatarURL,
          },
      }
    });
};

module.exports = signIn; 