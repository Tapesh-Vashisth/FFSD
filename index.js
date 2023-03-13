const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const ejs = require("ejs");
const PORT = process.env.PORT || 5000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/client"))
app.use(express.json()); 
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, "/client/")));

let users = [];

app.get("/", (req, res) => {
    res.send("homepage");
});

app.get("/signup", (req, res) => {
    res.render("./Pages/signUp", {error: 0});
})

function check(email) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email) {
            return true;
        }
    }

    return false;
}

function check2(email, password) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].password === password) {
            return true;
        }
    }

    return false;
}

app.post("/signup", (req, res) => {
    if (check(req.body.email)) {
        res.render("./Pages/signUp", {error: 1});
    } else {
        users.push({email: req.body.email, password: req.body.pass1});
        res.redirect("/");
    }

    console.log(users);
})

app.get("/login", (req, res) => {
    res.render("./Pages/login", {error: 0});
})

app.post("/login", (req, res) => {
    if (check2(req.body.email, req.body.password)) {
        res.redirect("/");
    } else {
        res.render("./Pages/login", {error: 1});
    }
})

app.get("/forgotPassword", (req, res) => {
    res.render("./Pages/forgotPassword");
})

app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`server listening on port ${PORT}`);
    }
}); 