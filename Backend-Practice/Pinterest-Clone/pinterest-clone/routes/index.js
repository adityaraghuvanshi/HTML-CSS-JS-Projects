var express = require("express");
var router = express.Router();
var userModel = require("./users");
var postModel = require("./posts");
const passport = require("passport");

const localStrategy = require("passport-local");
passport.use(new localStrategy(userModel.authenticate()));

/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index", { title: "Express" });
});

router.post("/register", function (req, res) {
	const { username, email, fullname } = req.body;
	const userData = new userModel({ username, email, fullname });

	userModel.register(userData, req.body.password).then(function () {
		passport.authenticate("local")(req, res, function () {
			res.redirect("./profile");
		});
	});
});

module.exports = router;
