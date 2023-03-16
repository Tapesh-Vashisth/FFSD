let db = require("../../database/db");
const bcrypt = require("bcrypt");


const loginPost = async (req, res) => {
    db.get("SELECT * FROM user where email=$email", {
        $email: req.body.email,
    }, async (error, row) => {
        if (!error && row) {
            const match = await bcrypt.compare(req.body.password, row.password);
            
            if (match) {
                    console.log(row);
                    const token = Date.now().toString();
                    db.run(`
                        UPDATE user
                        set token=$token
                        where email=$email
                    `, {
                        $email: req.body.email,
                        $token: token
                    }, (err) => {
                        if (err) {
                            return console.error(err);
                        }
        
                        console.log("updated successfully");
                    })
                    res.cookie("token", token, {httpOnly: true, secure: true, maxAge: 5*60*1000});
                    res.redirect("/");
                } else {
                    if (error) {
                        console.log(error);
                    }
        
                    res.render("./Pages/login", {error: 1});
                }
            } else {
                res.render("./Pages/login", {error: 1});
            }
    })
}

const loginGet = (req, res) => {
    res.render("./Pages/login", {error: 0});
}

module.exports.get = loginGet;
module.exports.post = loginPost;