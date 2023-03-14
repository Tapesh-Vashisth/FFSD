const express = require("express");
const login = require("./user/login");
const signup = require("./user/signup");
const forgotPassword = require("./user/forgotPassword");

const router = express.Router();

router.use("/user/login", login);
router.use("/user/signup", signup);
router.use("/user/forgotPassword", forgotPassword);

module.exports = router;