const express = require("express");
const editProfile = require("../../controllers/dashboard/editProfile.js");
const router = express.Router();

router.get("/", editProfile.get);

router.post("/", editProfile.post);

module.exports = router;