const express = require("express");
const login = require("../../../controllers/auth/login");
const router = express.Router();

router.get("/", login.get);

router.post("/", login.post);

module.exports = router;