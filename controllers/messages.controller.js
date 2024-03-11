const path = require("path");

function getMessages(req, res) {
  res.render("messages", {
    title: "Express with Handlebars",
    paragraph:
      "This is URL /messages and the messages was send from messages controller regardless messages.hbs files :)",
  });
  // res.sendFile(path.join(__dirname, "..", "public", "images", "NodeJs.png"));
}

function postMessages(req, res) {
  console.log("Updating Messages...");
}

module.exports = {
  getMessages,
  postMessages,
};
