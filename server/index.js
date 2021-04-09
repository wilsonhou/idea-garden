import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(cors());

const app = express();
const port = 2020;

app.get("/", (req, res) => {
  res.send({
    data: "Hello world!",
  });
});

app.listen(port, () => {
  console.log(`Listening as port ${port}`);
});
