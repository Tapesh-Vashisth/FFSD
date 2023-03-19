const express = require("express");
const notification = require("../../controllers/dashboard/notification.js");
const router = express.Router();

router.get("/", notification.get);

router.post("/", notification.post);

module.exports = router;