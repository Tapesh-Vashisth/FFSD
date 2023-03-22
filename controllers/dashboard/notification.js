const forgotPasswordGet = (req, res) => {
    res.render("./Pages/dashboard", {main: "./notification.ejs", title: "Notification"})
}

const forgotPasswordPost = (req, res) => {
    
}

module.exports.get = forgotPasswordGet;
module.exports.post = forgotPasswordPost;
