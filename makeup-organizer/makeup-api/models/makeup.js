const mongoose = require("mongoose");

const makeupSchema = new mongoose.Schema({
  type: { type: String, required: true },
  name: { type: String, required: true },
  img: String,
  shade: String,
  tags: String,
  buyMore: Boolean,
});

module.exports = mongoose.model("Makeup", makeupSchema);
