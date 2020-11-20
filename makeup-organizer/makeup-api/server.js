// set up express server
const express = require("express");
const app = express();
const PORT = 3003;

// controllers/routes
const makeupControllers = require("./controllers/makeup.js");
app.use("/makeup", makeupControllers);

//listener
app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
