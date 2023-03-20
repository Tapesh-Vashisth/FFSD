const express = require("express");
const post = require("../../controllers/post/addPost.js");
const router = express.Router();

router.get("/", post.get);

router.post("/", post.post);

module.exports = router;