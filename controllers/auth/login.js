let users = require("../../database/user");

function check2(email, password) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].password === password) {
            return true;
        }
    }

    return false;
}

const loginPost = (req, res) => {
    if (check2(req.body.email, req.body.password)) {
        res.redirect("/");
    } else {
        res.render("./Pages/login", {error: 1});
    }
}


const loginGet = (req, res) => {
    res.render("./Pages/login", {error: 0});
}


module.exports.get = loginGet;
module.exports.post = loginPost;