const express = require("express");
const posts = require("../../controllers/post/posts.js");
const router = express.Router();

router.get("/", posts.get);

// router.post("/", posts.post);

module.exports = router;