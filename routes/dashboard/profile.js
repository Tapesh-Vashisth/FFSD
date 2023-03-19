const express = require("express");
const profile = require("../../controllers/dashboard/profile.js");
const router = express.Router();

router.get("/", profile.get);

router.post("/", profile.post);

module.exports = router;