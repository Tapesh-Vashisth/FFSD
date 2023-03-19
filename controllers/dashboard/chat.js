const forgotPasswordGet = (req, res) => {
    res.render("./Pages/dashboard", {main: "./chat.ejs"})
}

const forgotPasswordPost = (req, res) => {
    
}

module.exports.get = forgotPasswordGet;
module.exports.post = forgotPasswordPost;
