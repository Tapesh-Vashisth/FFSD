const editProfileGet = (req, res) => {
    res.render("./Pages/dashboard", {main: "./editProfile.ejs", title: "Edit Profile"})
}

const editProfilePost = (req, res) => {
    
}

module.exports.get = editProfileGet;
module.exports.post = editProfilePost;
