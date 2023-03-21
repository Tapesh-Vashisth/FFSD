const editProfileGet = (req, res) => {
    res.render("./Pages/dashboard", {main: "./editProfile.ejs"})
}

const editProfilePost = (req, res) => {
    
}

module.exports.get = editProfileGet;
module.exports.post = editProfilePost;
