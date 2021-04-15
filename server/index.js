const express = require("express");
const ideasRouter = require("./controllers/ideas");
const mongoose = require("mongoose");

const app = express();
app.use("/api", ideasRouter);

mongoose
  .connect(
    "mongodb+srv://wilsonhou:E6M6Fx7DUDqasr@idea-garden.sjhhm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connected!"))
  .catch(err => {
    console.log("Error while connecting: " + err.message);
  });

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
