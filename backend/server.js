require("dotenv").config();

const express = require("express");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const rateLimit = require("express-rate-limit");

const connectDB = require("./config/db");
const verifyToken = require("./middleware/verifyToken");

const Task = require("./models/Task");
const authRoutes = require("./routes/auth");

require("./config/passport");

const app = express();
const PORT = process.env.PORT || 5000;

// ===========================
// Database
// ===========================
connectDB();

// ===========================
// Middleware
// ===========================
app.use(cors());

app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// ===========================
// Rate Limiter
// ===========================
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: {
    message: "Too many attempts. Try again after 15 minutes.",
  },
});

app.use("/api/auth", authLimiter);

// ===========================
// Routes
// ===========================
app.use("/api/auth", authRoutes);

// ===========================
// Home
// ===========================
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// ===========================
// Protected Route
// ===========================
app.get("/api/profile", verifyToken, (req, res) => {
  res.json({
    message: "Welcome! You are logged in.",
    user: req.user,
  });
});

// ===========================
// Get Products
// ===========================
app.get("/api/tasks", async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ===========================
// Get Single Product
// ===========================
app.get("/api/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task)
      return res.status(404).json({
        message: "Product not found",
      });

    res.json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ===========================
// Generate Description
// ===========================
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
      return res.status(400).json({
        message: "Product name required",
      });
    }

    const description = `Introducing ${productName}! Made with ${ingredients}, weighing ${weight}. Features: ${features}. Perfect for a ${tone.toLowerCase()} experience.`;

    const task = await Task.create({
      productName,
      ingredients,
      weight,
      features,
      tone,
      description,
    });

    res.status(201).json({
      message: "Product created successfully",
      task,
      description,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// ===========================
// Update Product
// ===========================
app.put("/api/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!task)
      return res.status(404).json({
        message: "Product not found",
      });

    res.json(task);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// ===========================
// Delete Product
// ===========================
app.delete("/api/tasks/:id", async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);

    res.json({
      message: "Product deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// ===========================
// Search Product
// ===========================
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

// ===========================
// Start Server
// ===========================
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});





