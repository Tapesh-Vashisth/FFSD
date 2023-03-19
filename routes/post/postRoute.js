const express = require('express')
const addPost = require('../../controllers/post/post')

const router = express.Router()

router.get("/addPost", addPost.get)

module.exports = router