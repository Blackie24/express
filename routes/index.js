var express = require("express");
var router = express.Router();
const login = "admin";
const password = "123";

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Express" });
});

router.get("/login", (req, res, next) => {
  res.render("login", { title: "Logowanie" });
});

router.post("/login", (req, res, next) => {
  const body = req.body;
  if (body.login === login && body.password === password) {
    req.session.admin = 1;
    console.log(req.body);
    res.redirect("/admin");
  }
  res.redirect("/login");
});

module.exports = router;
