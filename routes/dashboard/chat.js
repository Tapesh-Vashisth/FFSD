const express = require("express");
const chat = require("../../controllers/dashboard/chat.js");
const router = express.Router();

router.get("/", chat.get);

router.post("/", chat.post);

module.exports = router;