let users = require("../../database/user");

function check(email) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email) {
            return true;
        }
    }

    return false;
}

const signupPost = (req, res) => {
    if (check(req.body.email)) {
        res.render("./Pages/signUp", {error: 1});
    } else {
        users.push({email: req.body.email, password: req.body.pass1});
        res.redirect("/");
    }

    console.log(users);
}

const signupGet = (req, res) => {
    res.render("./Pages/signUp", {error: 0});
}

module.exports.get = signupGet;
module.exports.post = signupPost;