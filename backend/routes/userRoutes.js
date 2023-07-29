const express = require("express");
const { login, register } = require("../controller/userController");
const router = express.Router();

//login
router.post("/login", login);
//signe up
router.post("/register", register);
module.exports = router;
