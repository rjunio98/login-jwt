const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("authorization-token");
  if (!token) return res.status(401).send("Acessa Denied");

  try {
    const userVerified = jwt.verify(token, procss.env.TOKEN_SECRET);
    req.user = userVerified;
    next();
  } catch (error) {
    res.status(401).send("Acessa Denied");
  }
};
