const express = require("express");

const friendsController = require("../controllers/friends.controller");

const friendsRouter = express.Router();

//Apply middleware for friendsRouter
friendsRouter.use((req, res, next) => {
  let reqIp = req.ip;
  if (reqIp === "::1") {
    // Convert IPv6 loopback to IPv4 loopback
    reqIp = "127.0.0.1";
  }
  console.log("request ip address: ", reqIp);
  next();
});

// Make it more clean code by pass only 2 parameter and the req, res create under controller!
friendsRouter.get("/", friendsController.getFriends);
friendsRouter.get("/:FriendId", friendsController.getFriend);
friendsRouter.post("/", friendsController.postFriend);

module.exports = friendsRouter;
