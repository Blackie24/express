var express = require("express");
const app = require("../app");
var router = express.Router();

router.all("*", (req, res, next) => {
  if (!req.session.admin) {
    res.redirect("login");

    return;
  }

  next();
});

/* GET home page. */
router.get("/", function (req, res, next) {
  console.log(req.session.admin);
  res.render("admin", { title: "Admin" });
});

module.exports = router;
