const express = require("express");
const addPost = require("../../controllers/post/addPost.js");
const router = express.Router();

router.get("/", addPost.get);

// router.post("/", addPost.post);

module.exports = router;