const { Router } = require("express");
const {
  signUp,
  login,
  signupPage,
  loginPage,
  userLogout,
} = require("../controller/user.controller");
const userRoute = Router();

userRoute.get("/signup", signupPage);

userRoute.post("/signup", signUp);

userRoute.get("/login", loginPage);

userRoute.post("/login", login);

userRoute.get("/logout",userLogout);

module.exports = { userRoute };
