const express = require("express");
const WEB_SERVER = express();

WEB_SERVER.get("/", (req, res) => {
  res.render("pages/index");
});

WEB_SERVER.get("/about", (req, res) => {
  res.render("pages/about");
});

module.exports = WEB_SERVER;
