const addPostGet = (req, res) => {
  res.render('./Pages/dashboard', {main: "../Partials/addPost.ejs", title: "Add Post"});
}

module.exports.get = addPostGet
