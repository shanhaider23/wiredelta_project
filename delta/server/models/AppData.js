const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  type: String,
  service: String,
  location: String,
});
const UserModel = mongoose.model("form", UserSchema);

module.exports = UserModel;
