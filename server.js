const express = require("express");

// The "path" module provides utility functions for working with file and directory paths, across different operating systems.
const path = require("path");

const friendsRouter = require("./routes/friends.route");
const messagesRouter = require("./routes/messages.route");

const app = express();

const PORT = 3000;

// Set up Handlebars as the view engine
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

// Define a route to render a Handlebars view - work as react JSX
app.get("/", (req, res) => {
  res.render("index", {
    title: "Express with Handlebars",
    caption: "Node JS & Express Framework!",
  });
});

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

// Messages root routes url
app.use("/messages", messagesRouter);

// Friends root routes url
app.use("/friends", friendsRouter);

// Start the server by setting port 3000
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
