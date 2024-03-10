const express = require("express");
const { getAllBlogs } = require("./Controllers/Blogs.controller");
const WEB_SERVER = express();

WEB_SERVER.get("/blogs", async (req, res) => {
  let blogs;
  if (req.headers.cookie && req.headers.cookie != null) {
    try {
      blogs = await getAllBlogs();
      res.render("pages/index", { data: blogs });
    } catch (error) {
      console.log(error);
    }
  } else {
    res.redirect(301, "http://localhost:3000/signin");
  }
});

WEB_SERVER.get("/about", (req, res) => {
  res.render("pages/about");
});

WEB_SERVER.get("/createblog", (req, res) => {
  res.render("pages/createblog");
});

WEB_SERVER.get("/signup", (req, res) => {
  res.render("pages/signup");
});

WEB_SERVER.get("/signin", (req, res) => {
  res.render("pages/signin");
});

module.exports = WEB_SERVER;
