const mongoose = require("mongoose");
require("dotenv").config();

const connection = async () => {
  try {
    const path = process.env.DB_URL;
    await mongoose.connect(path);
    console.log("Database connected");
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = { connection };
