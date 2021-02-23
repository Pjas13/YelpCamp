const express = require("express");
const router = express.Router();
const User = require("../models/user");
const catchAsync = require("../utils/catchAsync");
const users = require("../controllers/users")
const passport = require("passport");

router.route("/register")
  .get(users.registerForm)
  .post(catchAsync(users.createUser));

router.route("/login")
  .get(users.loginForm)
  .post(passport.authenticate("local", {
    failureFlash: true,
    failureRedirect: "/login"
  }), users.loginUser);

router.get("/logout", users.logoutUser);

module.exports = router;
