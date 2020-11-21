const express = require("express");
const app = express();
const PORT = 3003;

// Controllers/Routes
const makeupController = require("./controllers/makeup.js");
app.use("/makeup", makeupController);

app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
