const express = require("express");
const path = require("path");
const app = express();
const ejs = require("ejs");
const PORT = process.env.PORT || 5000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/client"))
app.use(express.static(path.join(__dirname, "/client/")));

app.get("/", (req, res) => {
    res.render("./Pages/login");
});

app.get("/signup", (req, res) => {
    res.render("./Pages/signUp");
})

app.get("/login", (req, res) => {
    res.render("./Pages/login");
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