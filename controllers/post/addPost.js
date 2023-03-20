const postGet = (req, res) => {
  res.render('./Pages/dashboard', {main: "./addPost.ejs"});
}

module.exports.get = postGet
