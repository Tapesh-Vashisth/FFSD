const forgotPasswordGet = (req, res) => {
    res.render("./Pages/dashboard", {main: "./profile.ejs", title: "Profile"})
}

const forgotPasswordPost = (req, res) => {
    
}

module.exports.get = forgotPasswordGet;
module.exports.post = forgotPasswordPost;
