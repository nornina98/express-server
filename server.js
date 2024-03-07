const express = require("express");

const app = express();

const PORT = 3000;

const friends = [
  {
    id: 1,
    name: "nor-ikram",
  },
  {
    id: 2,
    name: "nor-hakimin",
  },
  {
    id: 3,
    name: "nor-aiman",
  },
];

//Create own middleware ~
app.use((req, res, next) => {
  const startDate = Date.now();
  next();
  const endDate = Date.now() - startDate;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${endDate}ms`);
});

// express.json is features from xpress v4.
app.use(express.json());

app.post("/friends", (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({ error: "Missing Friend name" });
  }
  const newFriend = {
    name: req.body.name,
    id: friends.length + 1,
  };
  friends.push(newFriend);
  res.json(newFriend);
});

app.get("/", (req, res) => {
  res.send({
    id: 0,
    name: "nor-ikram",
  });
});

app.get("/messages", (req, res) => {
  res.send(`<ul>
  <li>Sending HTML tagging into respond</li>
  </ul>`);
});

app.get("/friends", (req, res) => {
  res.json(friends);
});

app.get("/friends/:FriendId", (req, res) => {
  const FriendId = Number(req.params.FriendId);
  const id = friends[FriendId];
  if (id) {
    res.status(200).json(id);
  } else {
    res.status(404).json({
      error: "Friend ID does not exist",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Listening from port ${PORT}...`);
});
