const express = require("express");

const friendsController = require("./controllers/friends.controller");

const messagesController = require("./controllers/messages.controller");

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

// Make it more clean code by pass only 2 parameter and the req, res create under controller!
app.get("/messages", messagesController.getMessages);

app.post("/messages", messagesController.postMessages);

app.get("/friends", friendsController.getFriends);

app.get("/friends/:FriendId", friendsController.getFriend);

app.post("/friends", friendsController.postFriend);

app.listen(PORT, () => {
  console.log(`Listening from port ${PORT}...`);
});
