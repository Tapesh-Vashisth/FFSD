const express = require('express');
const addPost = require('./addPost');
const posts = require('./posts');
const router = express.Router()


router.use("/addPost", addPost);
router.use("/posts", posts);


module.exports = router