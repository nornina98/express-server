const express = require("express");

const messagesController = require("../controllers/messages.controller");

// remove app. and create relatively into root router
const messagesRouter = express.Router();

// Make it more clean code by pass only 2 parameter and the req, res create under controller!
// declare base route into server.js
messagesRouter.get("/", messagesController.getMessages);
messagesRouter.post("/", messagesController.postMessages);

module.exports = messagesRouter;
