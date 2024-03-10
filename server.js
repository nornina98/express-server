const express = require("express");

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

// express.json is features from xpress v4.
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`Hello This Main Page`);
});

// messages root routes url
app.use("/messages", messagesRouter);

// friends root routes url
app.use("/friends", friendsRouter);

app.listen(PORT, () => {
  console.log(`Listening from port ${PORT}...`);
});
