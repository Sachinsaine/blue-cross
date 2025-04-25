/* eslint-disable no-undef */
import express, { json, urlencoded } from "express";
import cors from "cors";
import { MongoClient, ServerApiVersion } from "mongodb";
import "dotenv/config";

// Improved connection string handling
const conString = process.env.MONGO_URI || "mongodb://127.0.0.1:27017";

const app = express();
app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(json());

// Global MongoDB Client
let clientObj;

async function connectDB() {
  try {
    clientObj = new MongoClient(conString, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    await clientObj.connect();
    await clientObj.db("admin").command({ ping: 1 }); // Test connection
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1);
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
app.get("/assets", async (req, res) => {
  try {
    const doc = await getDatabase()
      .collection("tbl-assets")
      .findOne({ type: "claim01" });
    res.json(doc || { message: "claim image not found" });
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

connectDB()
  .then(() => {
    const port = process.env.PORT || 2000;
    app.listen(port, () => {
      console.log(`🚀 Server started on port ${port}`);
      console.log(
        `🔗 MongoDB connected to: ${
          conString.split("@")[1]?.split("/")[0] || "local"
        }`
      );
    });
  })
  .catch((err) => {
    console.error("Failed to start server:", err);
    process.exit(1);
  });
