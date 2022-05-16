require('dotenv').config()


const express = require("express"),
  app = express(),
  port = process.env.PORT || 3009,
  cors = require("cors");

app.use(cors());
app.listen(port, () => console.log("Backend server live on " + port));

app.get("/", (req, res) => {
  res.send({ message: "We did it!" });
});