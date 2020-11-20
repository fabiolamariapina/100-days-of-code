const express = require("express");
const makeup = express.Router();

// ROUTES
// Index
makeup.get("/", (req, res) => {
  res.send("index");
});

module.exports = makeup;
