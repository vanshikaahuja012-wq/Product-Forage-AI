require("dotenv").config();

const express = require("express");
const cors = require("cors");
const Groq = require("groq-sdk");
const connectDB = require("./config/db");
const Task = require("./models/Task");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Home
app.get("/", (req, res) => {
  res.send("Backend is running!");
});


// =====================================
// GET ALL PRODUCTS
// =====================================
app.get("/api/tasks", async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });

    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});


// =====================================
// GET SINGLE PRODUCT
// =====================================
app.get("/api/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.json(task);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});


// =====================================
// CREATE PRODUCT
// =====================================
app.post("/api/generate-description", async (req, res) => {
  try {
    const {
      productName,
      ingredients,
      weight,
      features,
      tone,
    } = req.body;

    if (!productName) {
      return res.status(400).json({ message: "Product name required" });
    }

    // 1. Generate AI-like description
    const description = `Introducing ${productName}! Made with ${ingredients}, weighing ${weight}. Features: ${features}. Perfect for a ${tone.toLowerCase()} experience.`;

    // 2. SAVE TO DATABASE
    const task = await Task.create({
      productName,
      ingredients,
      weight,
      features,
      tone,
      description,
    });

    // 3. RETURN RESPONSE
    return res.status(201).json({
      message: "Product created successfully",
      task,
      description,
    });

  } catch (err) {
    console.log("ERROR:", err);
    res.status(500).json({ message: err.message });
  }
});


// =====================================
// UPDATE PRODUCT
// =====================================
app.put("/api/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      {
        productName: req.body.productName,
        ingredients: req.body.ingredients,
        weight: req.body.weight,
        features: req.body.features,
        tone: req.body.tone,
        description: req.body.description,
      },
      {
        new: true,
      }
    );

    if (!task) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.json(task);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});


// =====================================
// DELETE PRODUCT
// =====================================
app.delete("/api/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.json({
      message: "Product deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});


// =====================================
// SEARCH PRODUCT
// =====================================
app.get("/api/tasks/search/:keyword", async (req, res) => {
  try {
    const tasks = await Task.find({
      productName: {
        $regex: req.params.keyword,
        $options: "i",
      },
    });

    res.json(tasks);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});


// =====================================
// AI DESCRIPTION + SAVE TO DATABASE
// =====================================
app.post("/api/generate-description", async (req, res) => {
  try {
   const task = await Task.findOneAndUpdate(
  { productName },
  {
    productName,
    ingredients,
    weight,
    features,
    tone,
    description,
  },
  {
    new: true,
    upsert: true,
  }
);

    const description = `Introducing ${productName}! Made with ${ingredients}, weighing ${weight}. Features: ${features}. Perfect for customers looking for a ${tone.toLowerCase()} experience.`;

    res.status(200).json({
      description,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});


// =====================================
// SERVER
// =====================================
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
