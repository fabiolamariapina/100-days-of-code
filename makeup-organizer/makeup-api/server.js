const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 3003;

// middleware
app.use(express.json());

// Error / Disconnection
mongoose.connection.on("error", (err) =>
  console.log(err.message + " is Mongod not running?")
);
mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));

//...farther down the page

mongoose.connect("mongodb://localhost:27017/holidays", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongoose...");
});

// Controllers/Routes
const makeupController = require("./controllers/makeup.js");
app.use("/makeup", makeupController);

app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
