const express = require("express");

const app = express();

const PORT = 3000;

const friends = [
  {
    id: 0,
    name: "nor-ikram",
  },
  {
    id: 1,
    name: "nor-hakimin",
  },
  {
    id: 2,
    name: "nor-aiman",
  },
];

app.get("/", (req, res) => {
  res.send({
    id: 1,
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
