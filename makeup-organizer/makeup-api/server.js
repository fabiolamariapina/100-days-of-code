// set up express server
const express = require("express");
const app = express();
const PORT = 3003;

//listener
app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
