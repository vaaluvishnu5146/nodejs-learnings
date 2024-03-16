var jwt = require("jsonwebtoken");
const { createAUser, loginUser } = require("../Controllers/Auth.controller");
const { getAllBlogs } = require("../Controllers/Blogs.controller");

const AuthRouter = require("express").Router();

/**
 * Helps to get all the blogs
 */
AuthRouter.post("/signup", async (req, res) => {
  try {
    const user = await createAUser(req, res);
    if (user._id) {
      return res.status(200).json({
        success: true,
        message: "Account creation successful",
      });
    } else {
      return res.status(500).json({
        success: false,
        message: "Something went wrong",
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
});

AuthRouter.post("/signin", async (req, res) => {
  try {
    const matchedUser = await loginUser(req, res);
    if (matchedUser && matchedUser._id) {
      if (matchedUser.password === req.body.password) {
        try {
          const TOKEN = jwt.sign(
            {
              subscriptionId: 0,
              role: ["user", "mentor"],
            },
            process.env.JWT_SECRET,
            {
              expiresIn: 60 * 2,
              algorithm: "HS256",
            }
          );
          return res.status(200).json({
            success: true,
            token: TOKEN,
            message: "Login Successful!",
          });
          // res.cookie("user", matchedUser._id, {
          //   maxAge: 900000,
          //   httpOnly: false,
          // });
          // res.redirect("https://www.google.com");
        } catch (error) {
          console.log(error);
        }
      } else {
        return res.status(401).json({
          success: false,
          message: "Wrong credentials",
        });
      }
    } else {
      return res.status(401).json({
        success: false,
        message: "Wrong credentials",
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Something went wrong",
      error,
    });
  }
});

module.exports = AuthRouter;
