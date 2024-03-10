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
        res.cookie("user", matchedUser._id, {
          maxAge: 900000,
          httpOnly: false,
        });
        try {
          // const blogs = await getAllBlogs();
          return res.redirect(301, "/blogs");
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
