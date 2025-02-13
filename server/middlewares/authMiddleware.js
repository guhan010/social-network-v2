const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    console.log(req.headers);
    const token = req.headers["authorization"].split(" ")[1];
    console.log(token);
    const decoded = jwt.verify(token, process.env.JWT_SECRET, {
      maxAge: "7d",
    });
    //   console.log(decoded);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json({ message: "Access denied" });
  }
};

module.exports = authMiddleware;
