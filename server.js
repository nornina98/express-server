const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("HIIIIII");
});

app.listen(PORT, () => {
  console.log(`Listening from port ${PORT}...`);
});
