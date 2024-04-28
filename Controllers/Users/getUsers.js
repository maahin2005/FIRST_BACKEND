const UserModel = require("../../Models/Users/userSchema");

const getUsers = async (_, res) => {
  try {
    let users = await UserModel.find();

    res.json({ users });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getUsers;
