const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//configration
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//connect to mongodb
mongoose.connect(
  "mongodb+srv://shanhaider23:alizejan572@test.zrbab.mongodb.net/boat?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("DB is Connected");
  }
);
//data schema
const userSchema = new mongoose.Schema({
  name: String,
  password: String,
});
//data model
const User = new mongoose.model("User", userSchema);

//data schema
const itemSchema = {
  name: String,
  type: String,
  service: String,
  location: String,
  job: String,
};
//data model
const Item = mongoose.model("Item", itemSchema);

//read route get
app.get("/items", (req, res) => {
  Item.find()
    .then((items) => res.json(items))
    .catch((err) => res.status(400).json("Error: " + err));
});

//read route get
app.get("/", (req, res) => {
  res.send("MY api");
});

//read route post
app.post("/login", (req, res) => {
  const { name, password } = req.body;
  User.findOne({ name: name }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "Login Successfully", user: user });
      } else {
        res.send({ message: "password did not match" });
      }
    } else {
      res.send({ message: "User not registered" });
    }
  });
});

//read route
//delete route
app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;

  Item.findByIdAndDelete({ _id: id }, (req, res, err) => {
    if (!err) {
      console.log("Item deleted");
    } else {
      console.log(err);
    }
  });
});
//read route post
app.post("/register", (req, res) => {
  const { name, password } = req.body;
  User.findOne({ name: name }, (err, user) => {
    if (user) {
      res.send({ message: "User already registered" });
    } else {
      const user = new User({ name, password });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Successfully Registered" });
        }
      });
    }
  });
});
app.listen(8000, () => {
  console.log("Server is running");
});
