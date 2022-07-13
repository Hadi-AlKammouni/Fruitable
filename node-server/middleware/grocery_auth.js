const jwt = require("jsonwebtoken");

const config = process.env;

function groceryMiddleware () { return  (req, res, next) => {
  const token = req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send("Unauthorized");
  }
  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    req.grocery = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};
};

module.exports = groceryMiddleware;