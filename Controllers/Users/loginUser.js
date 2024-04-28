const bcrypt = require("bcrypt");
const UserModel = require("../../Models/Users/userSchema");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(403).json({ msg: "USER NOT FOUND" });
    }

    const isPasswordTrue = await bcrypt.compare(password, user.password);

    if (!isPasswordTrue) {
      return res.status(403).json({ msg: "Invalid Password" });
    }

    const token = jwt.sign({ userID: user._id }, process.env.SECRET_KEY);

    res.status(200).json({ msg: "User Login Success", user, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = loginUser;
