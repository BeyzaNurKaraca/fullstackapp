const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");
const cors = require("cors");
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://{userName}:{password}@cluster1.mzvtd.mongodb.net/user-app"
);

app.get("/getUsers", (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/createUser", async (req, res) => {
  const user = req.body; //yeni user oluşturacağımıza dair request aldık frontend'den
  const newUser = new UserModel(user); //backend'de de yeni bir user oluştur,oluşturduğun yeni user requestte oluşturduğun yeni userın özellikleri olsun
  await newUser.save(); //yeni oluşturduğumuz user'ı database'e kaydet
  res.json(user + "Kullanıcı Girişi Başarılı!");
});

app.listen(3050, () => {
  console.log("SERVER ÇALIŞIYOR!!!");
});
