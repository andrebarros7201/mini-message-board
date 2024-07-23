const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

router.get("/", (req, res) => {
  res.render("index", { title: "Mini Message board", messages: messages });
});

router.get("/new", (req, res) => {
  res.render("form", { title: "Create New Post" });
});

router.get("/:index", (req, res) => {
  res.render("message", {
    title: "Message",
    messageObj: messages[req.params.index],
  });
});

router.post("/new", (req, res) => {
  messages.push({
    text: req.body.message,
    user: req.body.username,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
