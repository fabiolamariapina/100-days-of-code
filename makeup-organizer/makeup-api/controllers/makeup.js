const express = require("express");
const makeup = express.Router();

makeup.get("/", (req, res) => {
  res.send("index");
});

module.exports = makeup;
