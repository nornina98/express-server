// The "path" module provides utility functions for working with file and directory paths, across different operating systems.
const path = require("path");

function getMessages(req, res) {
  res.sendFile(path.join(__dirname, "..", "public", "images", "NodeJs.png"));
}

function postMessages(req, res) {
  console.log("Updating Messages...");
}

module.exports = {
  getMessages,
  postMessages,
};
