const mongoose = require("mongoose");

function connectToMongoDB() {
  mongoose
    .connect("mongodb://localhost:27017/mediumclone")
    .then((response) => {
      console.log("Database connection successful");
    })
    .catch((error) => console.log(error));
}

module.exports = connectToMongoDB;
