const jwt = require("jsonwebtoken");

const config = process.env;

function authMiddleware () { return  (req, res, next) => {
  const token = req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    console.log("unauth")
    return res.status(403).send("Unauthorized");
  }
  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    console.log("invalid")

    return res.status(401).send("Invalid Token");
  }
  console.log("good")

  return next();
};
};

module.exports = authMiddleware;