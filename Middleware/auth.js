const jwt = require("jsonwebtoken");
require("dotenv").config();

const authentication = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "TOKEN NOT PROVIDED" });
  }

  try {
    let decodedMSG = jwt.verify(token, process.env.SECRET_KEY);

    req.body.userID = decodedMSG.userID;
    req.body.username = decodedMSG.username;

    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = authentication;
