const express = require("express");
const API_SERVER = express();

API_SERVER.get("/", (req, res) => {
  res.status(200).json({
    message: "Request successful",
  });
});

API_SERVER.get("/about", (req, res) => {
  res.status(200).json({
    message: "About request successful",
  });
});

API_SERVER.get("/:id", (req, res) => {
  const { id } = req.params;
  const { mode = "" } = req.query;
  console.log(id, mode);
  res.status(200).json({
    message: `${id} request successful`,
  });
});

API_SERVER.post("/", (req, res) => {
  console.log(req.body);
  res.status(200).json({
    message: "Post request successful",
  });
});

module.exports = API_SERVER;
