const express = require("express");
const router = express.Router();
const UserModel = require("./AppData");

router.route("/getdata").get((req, res) => {
  UserModel.find().then((foundData) => res.json(foundData));
});

module.exports = router;
