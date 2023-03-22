const postGet = (req, res) => {
    res.render('./Pages/dashboard', {main: "./posts.ejs", title: "Feed"});
}
  
module.exports.get = postGet
  