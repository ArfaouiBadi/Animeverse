const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  firstName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: false,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  isAdmin: {
    type: Boolean,
    required: false,
    unique: false,
  },
  password: {
    type: String,
    required: true,
  },
  birth: {
    type: Date,
    required: true,
  },
  role: {
    type: String,
    default: "client",
  },
});
//static


const user = mongoose.model("user", userSchema);

module.exports = user;
