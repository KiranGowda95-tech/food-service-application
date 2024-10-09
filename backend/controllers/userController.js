const UserModel = require("../models/Users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const registerUser = async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  //find weather email already exists or not
  const user = await UserModel.findOne({ email });

  if (user) {
    return res.send("User already exist");
  }
  //hashed the password
  const salt = await bcrypt.genSalt(10);
  //10-how many time rotate before generating the salt

  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new UserModel({ name, email, password: hashedPassword });

  const savedUser = newUser.save();

  //create a json web token and return it
  const token = jwt.sign({ userId: savedUser._id }, "552233");
  console.log(req.body);

  return res.json({ user: newUser, token });
};

const loginUser = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const user = await UserModel.findOne({ email });
  if (!user) {
    return res.status(400).send("User not found");
  }
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.send("Password doesnot match");
  }
  const token = jwt.sign({ userId: user._id }, "552233");
  console.log(req.body);
  return res.status(200).json({ user: user, token });
};

module.exports = { registerUser, loginUser };
