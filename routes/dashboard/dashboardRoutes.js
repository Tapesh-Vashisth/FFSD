const express = require('express')
const profile = require('./profile.js')
const notification = require('./notification.js')
const chat = require('./chat.js')

const router = express.Router()

router.use('/profile', profile)
router.use('/notification', notification)
router.use('/chat', chat)

module.exports = router
