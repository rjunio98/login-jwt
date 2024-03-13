const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("authorization-token");
  if (!token) return res.status(401).send("Access Denied");

  try {
    const useVerified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = useVerified;
    next();
  } catch (error) {
    res.status(401).send("Access Denied");
  }
};
