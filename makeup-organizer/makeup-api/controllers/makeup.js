const express = require("express");
const makeup = express.Router();
const Makeup = require("../models/makeup.js");

// ROUTES
// Index
makeup.get("/", (req, res) => {
  res.send("index");
});
// Create
makeup.post("/", async (req, res) => {
  Makeup.create(req.body, (error, createdMakeup) => {
    if (error) {
      res.status(400).json({ error: error.message });
    }
    res.status(200).send(createdMakeup);
  });
});

module.exports = makeup;
