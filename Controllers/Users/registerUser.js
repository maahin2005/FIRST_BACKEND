const UserModel = require("../../Models/Users/userSchema");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  const { email, password, username } = req.body;

  try {
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(403).json({ message: "USER ALREADY EXISTED" });
    }

    const hashedPassword = await bcrypt.hash(password, 5);

    const newUser = new UserModel({
      email,
      password: hashedPassword,
      username,
    });
    newUser.save();

    res
      .status(201)
      .json({ message: "New user has been created successfully", newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = registerUser;
