const ideasRouter = require("express").Router();

ideasRouter.get("/", (req, res) => {
  return res.send("Hi from get handler!");
});

ideasRouter.post("/", (req, res) => {
  return res.send("Hi from post handler!");
});

module.exports = ideasRouter;
