const mongoose = require("mongoose");

function connectToMongoDB() {
  const DATABASE_URI =
    process.env.NODE_ENVIRONMENT === "development"
      ? "mongodb://localhost:27017/mediumclone"
      : `mongodb+srv://${process.env.MONGODB_NAME}:${process.env.MONGODB_PASSWORD}@blogsmaster.2b0jkhx.mongodb.net/`;
  console.log("DB URI", DATABASE_URI);
  mongoose
    .connect(DATABASE_URI)
    .then((response) => {
      console.log("Database connection successful");
    })
    .catch((error) => console.log(error));
}

module.exports = connectToMongoDB;
