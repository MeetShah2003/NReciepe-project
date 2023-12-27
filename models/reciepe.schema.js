const mongoose = require("mongoose");

const reciepeSchema = new mongoose.Schema({
  img: String,
  reciepename: String,
  time: Number,
  author: String,
  description: String,
  comment: [{ type: String, userId: String }],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "user51" },
});

const reciepeModel = new mongoose.model("reciepe51", reciepeSchema);

module.exports = { reciepeModel };
