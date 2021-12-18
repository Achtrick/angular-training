const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { mongoose } = require("./database/mongoose");
const { wish } = require("./database/models/wish.model");

app = express();
app.listen(3001, () => {
  console.log("Running on port 3001");
});
app.use(
  cors({
    origin: ["http://localhost:4200"],
    methods: ["POST", "GET", "PUT", "DELETE"],
  })
);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/wishList", (req, res) => {
  wish
    .find()
    .then((wishs) => {
      res.send(wishs);
    })
    .catch((e) => {
      req.send("ERROR");
    });
});

app.post("/createWish", (req, res) => {
  const text = req.body.text;

  const newWish = new wish({
    text: text,
  });

  try {
    newWish.save();
    res.send({ msg: "SUCCESS" });
  } catch (error) {
    res.send("ERROR");
  }
});
