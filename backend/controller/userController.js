const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const user = require("../models/user");
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};
/* const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);

  try {
    const userr = await user.login(email, password);

    const token = createToken(userr._id);
    res.status(201).json({ email, token });
  } catch (err) {
    return res.status(404).json({ err: err.message });
  }
};

const signupUser = async (req, res) => {
  const { email, password, firstName, lastName, role, birth, address, phone } =
    req.body;
  try {
    const userr = await user.signup(
      email,
      password,
      firstName,
      lastName,
      role,
      birth,
      address,
      phone
    );
    const token = createToken(userr._id);
    res.status(201).json({
      email,
      password,
      firstName,
      lastName,
      role,
      birth,
      address,
      phone,
    });
  } catch (err) {
    return res.status(404).json({ err: err.message });
  }
}; */

const register = async (req, res) => {
  const { username, email, password } = req.body;
  const user = await user.findOne({ email });
  if (user) {
    return res.json({ message: "user already exists" });
  }
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = new user({
    username: username,
    email: email,
    password: hashedPassword,
  });
  await newUser.save();
  return res.json({ message: "user created succefully" });
};

const login = async (req, res) => {
  const { username, email, password } = req.body;
  const Loguser = await user.findOne({ email });
  if (!user) {
    return res.json({ message: "user dosn't exists" });
  }
  const isPasswordValid = await bcrypt.compare(password, Loguser.password);
  if (!isPasswordValid) {
    return res.json({
      message: "Username or password is not correct",
    });
  }
  const token = createToken(Loguser._id);
  res.status(201).json({ email, token });
};

module.exports = { login, register };
