let db = require('../../database/db')
const forgotPasswordGet = (req, res) => {
  res.render('./Pages/forgotPassword')
}

const forgotPasswordPost = (req, res) => {
  db.get(
    'SELECT * FROM user where email=$email',
    {
      $email: req.body.email,
    },
    async (error, row) => {
      if (!error && row) {
        return res.render('./Pages/forgotPassword', { error: 0 })
      }
      return res.render('./Pages/forgotPassword', { error: 1 })
    },
  )
}

module.exports.get = forgotPasswordGet
module.exports.post = forgotPasswordPost
