const express = require("express");
const forgotPassword = require("../../../controllers/auth/forgotPassword");
const router = express.Router();

router.get("/", forgotPassword.get);

router.post("/", forgotPassword.post);

module.exports = router;