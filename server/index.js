import express from "express";

const app = express();
const port = 2000;

app.get("/", (req, res) => {
  res.send({
    data: "Hello world!",
  });
});

app.listen(port, () => {
  console.log(`Listening as port ${port}`);
});
