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
import { MongoClient } from "mongodb";
import "dotenv/config"; // ✅ Load environment variables

// Connection String
// eslint-disable-next-line no-undef
const conString = process.env.MONGO_URI || "mongodb://127.0.0.1:27017";

// Create Express App
const app = express();
app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(json());

// Global MongoDB Client
let clientObj;
async function connectDB() {
  try {
    clientObj = new MongoClient(conString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await clientObj.connect();
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    // eslint-disable-next-line no-undef
    process.exit(1); // Exit the process if connection fails
  }
}

// Middleware to Ensure DB Connection
app.use((req, res, next) => {
  if (!clientObj) {
    return res.status(500).json({ message: "Database not initialized" });
  }
  next();
});

// Helper Function to Get Database
const getDatabase = () => clientObj.db("blue-cross");

// Routes
app.get("/assets", async (req, res) => {
  try {
    const doc = await getDatabase()
      .collection("tbl-assets")
      .findOne({ type: "logo" });
    res.json(doc || { message: "Logo not found" });
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/carousel", async (req, res) => {
  try {
    const docs = await getDatabase()
      .collection("tbl-carousel")
      .find({})
      .toArray();
    res.json(docs);
  } catch (error) {
    console.error("Error fetching carousel data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/ychooseus", async (req, res) => {
  try {
    const docs = await getDatabase()
      .collection("tbl-ychooseus")
      .find({})
      .toArray();
    res.json(docs);
  } catch (error) {
    console.error("Error fetching why choose us data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/reviews", async (req, res) => {
  try {
    const docs = await getDatabase()
      .collection("tbl-reviews")
      .find({})
      .toArray();
    res.json(docs);
  } catch (error) {
    console.error("Error fetching reviews data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/aboutInsurances", async (req, res) => {
  try {
    const docs = await getDatabase()
      .collection("tbl-aboutinsurances")
      .find({})
      .toArray();
    res.json(docs);
  } catch (error) {
    console.error("Error fetching about insurances data:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Start Server After Connecting to MongoDB
connectDB().then(() => {
  app.listen(2000, () =>
    console.log(`🚀 Server started at: http://127.0.0.1:2000`)
  );
});
