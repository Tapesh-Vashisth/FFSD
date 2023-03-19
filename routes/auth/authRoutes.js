const express = require('express')
const login = require('./user/login')
const signup = require('./user/signup')
const forgotPassword = require('./user/forgotPassword')

const router = express.Router()

router.use('/login', login)
router.use('/signup', signup)
router.use('/forgotPassword', forgotPassword)

module.exports = router
