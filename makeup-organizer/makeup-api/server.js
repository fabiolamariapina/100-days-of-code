// set up express server
const express = require("express");
const app = express();
const PORT = 3003;
// initalize mongoose
const mongoose = require("mongoose");

// middleware
app.use(express.json());

// mongoose connection
// Database Error / Disconnection
mongoose.connection.on("error", (err) =>
  console.log(err.message + " is Mongod not running?")
);
mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));

// Database connection
mongoose.connect("mongodb://localhost:27017/merncrud", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongoose...");
});

// controllers/routes
const makeupControllers = require("./controllers/makeup.js");
app.use("/makeup", makeupControllers);

//listener
app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
