const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const ejs = require("ejs");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/auth/authRoutes");
const sqlite = require("sqlite3");
const PORT = process.env.PORT || 5000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/client"))
app.use(express.json()); 
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("client"));


app.use("/auth", authRouter);

app.get("/", (req, res) => {
    res.render("./Pages/homepage")
});

app.all("*", (req, res) => {
    res.render("./Pages/notFoundError");
})


app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`server started on port ${PORT}`);
    }
}); 