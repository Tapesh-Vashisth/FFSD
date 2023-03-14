let users = require("../../database/user");

const forgotPasswordGet = (req, res) => {
    res.render("./Pages/forgotPassword");
}

const forgotPasswordPost = (req, res) => {
    
}

module.exports.get = forgotPasswordGet;
module.exports.post = forgotPasswordPost;
