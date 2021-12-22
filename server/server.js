const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { wish } = require("./database/models/wish.model");
const { mongoose } = require("./database/mongoose");
const port = process.env.PORT || 3001;

app = express();
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
app.get("/", (req, res) => {
  res.send(`Running on port ${port} On heroku server !`);
});
app.use(
  cors({
    origin: ["http://localhost:4200", "https://wishs-book.web.app"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
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
      res.send({ msg: "ERROR" });
    });
});

app.post("/createWish", (req, res) => {
  const text = req.body.text;

  const newWish = new wish({
    text: text,
  });

  newWish
    .save()
    .then((wishs) => {
      res.send(wishs);
    })
    .catch((e) => {
      res.send({ msg: "ERROR" });
    });
});

app.post("/Wish", (req, res) => {
  const _id = req.body._id;

  wish
    .findById(_id)
    .then((wish) => {
      res.send(wish);
    })
    .catch((e) => {
      res.send("ERROR");
    });
});

app.put("/editWish", (req, res) => {
  const _id = req.body._id;
  const text = req.body.text;

  wish
    .findById(_id)
    .then((wish) => {
      wish.text = text;
      wish.save();
      res.send({ msg: "SUCCESS" });
    })
    .catch((e) => {
      res.send({ msg: "ERROR" });
    });
});

app.post("/deleteWish", (req, res) => {
  const _id = req.body._id;

  wish
    .findByIdAndDelete(_id)
    .then(() => {
      wish.find().then((wishs) => {
        res.send(wishs);
      });
    })
    .catch((e) => {
      res.send({ msg: "ERROR" });
    });
});
