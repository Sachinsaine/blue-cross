import express, { json, urlencoded } from "express";
import cors from "cors";
import { MongoClient as mongoclient } from "mongodb";

var conString = "mongodb://127.0.0.1:27017";
var app = express();
app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(json());

app.get("/assests", (req, res) => {
  mongoclient.connect(conString).then((clientObj) => {
    var database = clientObj.db("blue-cross");
    database
      .collection("tbl-assets")
      .find({})
      .toArray()
      .then((docs) => {
        res.send(docs);
        res.end();
      });
  });
});

app.listen(2000);
console.log(`Server has been started : http://127.0.0.1:2000`);
