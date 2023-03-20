const addPostGet = (req, res) => {
  res.render('./Pages/dashboard', {main: "../Partials/addPost.ejs"});
}

module.exports.get = addPostGet
