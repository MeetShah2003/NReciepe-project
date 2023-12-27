const jwt = require("jsonwebtoken");

const isAdmin = (req, res, next) => {
  const { token } = req.cookies;

  if (token) {
    let decode = jwt.verify(token, process.env.JWT_SECRET);
    if (decode.role == "admin") {
      req.user = decode;
      next();
    } else {
      return res
        .status(400)
        .send("ONLY ADMIN HAVE RIGHTS TO ACCESS THESE PAGE");
    }
  } else {
    return res.status(200).redirect("/user/login");
  }
};

const isValid = (req, res, next) => {
  const { token } = req.cookies;

  if (token) {
    next();
  } else {
    return res.status(400).redirect("/user/login");
  }
};

module.exports = { isAdmin, isValid };
