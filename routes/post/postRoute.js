const express = require('express')
const addPost = require('../../controllers/post/addPost')

const router = express.Router()

router.get("/addPost", addPost.get);

module.exports = router