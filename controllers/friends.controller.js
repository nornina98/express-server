const friendData = require("../models/friends.model");

function getFriends(req, res) {
  res.json(friendData);
}

function getFriend(req, res) {
  const FriendId = Number(req.params.FriendId);
  const id = friendData[FriendId];
  if (id) {
    res.status(200).json(id);
  } else {
    res.status(404).json({
      error: "Friend ID does not exist",
    });
  }
}

function postFriend(req, res) {
  if (!req.body.name) {
    return res.status(400).json({ error: "Missing Friend name" });
  }
  const newFriend = {
    name: req.body.name,
    id: friendData.length,
  };
  friendData.push(newFriend);
  res.json(newFriend);
}

module.exports = {
  getFriends,
  getFriend,
  postFriend,
};
