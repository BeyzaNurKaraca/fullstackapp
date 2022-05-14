const mongoose = require("mongoose");
//req yaz tab e bas 
const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, //doldurulması zorunlu alan olsun!!
  },
  age: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: false,
  },
});
const UserModel = mongoose.model("users", usersSchema);

module.exports = UserModel;
//dışarıya aktarmak için export ediyoruz.
