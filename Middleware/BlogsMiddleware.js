const JWT = require("jsonwebtoken");

function BlogsShield(req, res, next) {
  if (req.headers.token) {
    try {
      const token = JWT.verify(req.headers.token, process.env.JWT_SECRET);
      if (token) {
        next();
      }
    } catch (error) {
      res.status(401).json({
        message: "Token Expired. Login to continue!",
        success: false,
      });
    }
  } else
    res.status(401).json({
      message: "Token missing. Login to continue!",
      success: false,
    });
}

module.exports = {
  BlogsShield,
};
