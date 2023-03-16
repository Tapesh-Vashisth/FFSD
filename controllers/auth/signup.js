let db = require("../../database/db");
const bcrypt = require("bcrypt");


const signupPost = async (req, res) => {
    db.get("SELECT * from user where email=$email", {
        $email: req.body.email
    }, async (error, row) => {
        if (!error && row) {
            res.render("./Pages/signUp", {error: 1});
        } else {
            const token = Date.now().toString();
            const hashedpassword = await bcrypt.hash(req.body.pass1, 10);
            db.run("INSERT INTO user(user_id, email, password, token) values(?, ?, ?, ?)", [Date.now().toString(), req.body.email, hashedpassword, token], (err) => {
                if (err) {
                    console.log(err);
                    res.render("./Pages/signUp", {error: 0});
                } else {
                    res.cookie("token", token, {httpOnly: true, secure: true, maxAge: 5*60*1000});
                    res.redirect("/");
                }
            })
        }
    })
}

const signupGet = (req, res) => {
    res.render("./Pages/signUp", {error: 0});
}

module.exports.get = signupGet;
module.exports.post = signupPost;