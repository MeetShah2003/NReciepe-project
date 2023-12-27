const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { userModel } = require("../models/user.schema");

const signupPage = (req, res) => {
  return res.render("signup");
};

const signUp = async (req, res) => {
  const { username, password, role } = req.body;
  let user = await userModel.findOne({ username });
  if (user) {
    return res.status(400).send("user already exists");
  } else {
    bcrypt.hash(password, 7, async (err, hash) => {
      if (err) {
        console.log(err.message);
      } else {
        let user = await userModel.create({
          username,
          password: hash,
          role,
        });
        let token = jwt.sign(
          { id: user.id, role: user.role },
          process.env.JWT_SECRET
        );
        return res.status(200).cookie("token", token).send(user);
      }
    });
  }
};
const loginPage = (req, res) => {
  return res.render("login");
};

const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await userModel.findOne({ username });

  if (user) {
    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        console.log(err.message);
      }
      if (result) {
        let token = jwt.sign(
          { id: user.id, role: user.role },
          process.env.JWT_SECRET
        );
        return res.status(200).cookie("token", token).send(user);
      } else {
        return res.status(400).send("invalid password");
      }
    });
  } else {
    return res.status(400).redirect("/user/signup");
  }
};

const userLogout = (req, res) => {
  res.clearCookie("token").redirect("/user/login");
  // req.logout((err, info) => {
  //   if (err) {
  //     console.log(err.message);
  //   }
  //   else {
      
  //   }
  // });
};

module.exports = { signupPage, signUp, login, loginPage, userLogout };
