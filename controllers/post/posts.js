const postGet = (req, res) => {
    res.render('./Pages/dashboard', {main: "./posts.ejs"});
}
  
module.exports.get = postGet
  