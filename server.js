const express = require("express");
const path = require("path");

const friendsRouter = require("./routes/friends.route");
const messagesRouter = require("./routes/messages.route");

const app = express();

const PORT = 3000;

//Create own middleware ~
app.use((req, res, next) => {
  const startDate = Date.now();
  next();
  const endDate = Date.now() - startDate;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${endDate}ms`);
});

// This middleware takes a directory path as an argument and serves any files in that directory at their respective URL paths
app.use("/home", express.static(path.join(__dirname, "public")));

// Middleware to parse JSON in the request body
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`Hello This Main Page`);
});

// Messages root routes url
app.use("/messages", messagesRouter);

// Friends root routes url
app.use("/friends", friendsRouter);

// Start the server by setting port 3000
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
