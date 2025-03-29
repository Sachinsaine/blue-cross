// import express, { json, urlencoded } from "express";
// import cors from "cors";
// import { MongoClient as mongoclient } from "mongodb";

// var conString = "mongodb://127.0.0.1:27017";
// var app = express();
// app.use(cors());
// app.use(urlencoded({ extended: true }));
// app.use(json());

// app.get("/assets", async (req, res) => {
//   try {
//     const clientObj = await mongoclient.connect(conString);
//     const database = clientObj.db("blue-cross");
//     const doc = await database
//       .collection("tbl-assets")
//       .findOne({ type: "logo" });

//     if (doc) {
//       res.json(doc);
//     } else {
//       res.status(404).json({ message: "Logo not found" });
//     }
//   } catch (error) {
//     console.error("Database error:", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// });

// app.get("/carousel", (req, res) => {
//   mongoclient.connect(conString).then((clientObj) => {
//     var database = clientObj.db("blue-cross");
//     database
//       .collection("tbl-carousel")
//       .find({})
//       .toArray()
//       .then((docs) => {
//         res.send(docs);
//         res.end();
//       });
//   });
// });
// app.get("/ychooseus", (req, res) => {
//   mongoclient.connect(conString).then((clientObj) => {
//     var database = clientObj.db("blue-cross");
//     database
//       .collection("tbl-ychooseus")
//       .find({})
//       .toArray()
//       .then((docs) => {
//         res.send(docs);
//         res.end();
//       })
//       .catch((err) => {
//         console.log("got an error while fetching why choose us data:", err);
//       });
//   });
// });

// app.get("/reviews", (req, res) => {
//   mongoclient.connect(conString).then((clientObj) => {
//     var database = clientObj.db("blue-cross");
//     database
//       .collection("tbl-reviews")
//       .find({})
//       .toArray()
//       .then((docs) => {
//         res.send(docs);
//         res.end();
//       })
//       .catch((err) => {
//         console.log("got an error while fetching reviews data:", err);
//       });
//   });
// });

// app.listen(2000, () => console.log(`Server started at: http://127.0.0.1:2000`));

import express, { json, urlencoded } from "express";
import cors from "cors";
import { MongoClient as mongoclient } from "mongodb";
import "dotenv/config"; // ✅ Load environment variables

// eslint-disable-next-line no-undef
const conString = process.env.MONGO_URI || "mongodb://127.0.0.1:27017"; // ✅ Now it works

const app = express();
app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(json());

app.get("/assets", async (req, res) => {
  try {
    const clientObj = await mongoclient.connect(conString);
    const database = clientObj.db("blue-cross");
    const doc = await database
      .collection("tbl-assets")
      .findOne({ type: "logo" });

    if (doc) {
      res.json(doc);
    } else {
      res.status(404).json({ message: "Logo not found" });
    }
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/carousel", async (req, res) => {
  try {
    const clientObj = await mongoclient.connect(conString);
    const database = clientObj.db("blue-cross");
    const docs = await database.collection("tbl-carousel").find({}).toArray();
    res.json(docs);
  } catch (error) {
    console.error("Error fetching carousel data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/ychooseus", async (req, res) => {
  try {
    const clientObj = await mongoclient.connect(conString);
    const database = clientObj.db("blue-cross");
    const docs = await database.collection("tbl-ychooseus").find({}).toArray();
    res.json(docs);
  } catch (error) {
    console.error("Error fetching why choose us data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/reviews", async (req, res) => {
  try {
    const clientObj = await mongoclient.connect(conString);
    const database = clientObj.db("blue-cross");
    const docs = await database.collection("tbl-reviews").find({}).toArray();
    res.json(docs);
  } catch (error) {
    console.error("Error fetching reviews data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(2000, () => console.log(`Server started at: http://127.0.0.1:2000`));
