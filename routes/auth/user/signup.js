const express = require("express");
const signup = require("../../../controllers/auth/signup");
const router = express.Router();

router.get("/", signup.get);

router.post("/", signup.post);

module.exports = router;