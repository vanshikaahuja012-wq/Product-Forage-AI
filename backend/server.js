require("dotenv").config();

const express = require("express");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const rateLimit = require("express-rate-limit");
const Groq = require("groq-sdk");
const connectDB = require("./config/db");
const verifyToken = require("./middleware/verifyToken");

const Task = require("./models/Task");
const authRoutes = require("./routes/auth");

require("./config/passport");
console.log("JWT_SECRET =", process.env.JWT_SECRET);
console.log("SESSION_SECRET =", process.env.SESSION_SECRET);

const app = express();
const PORT = process.env.PORT || 5000;
const client = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});
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


    const prompt = `
Create a professional e-commerce product description.

Product Name:
${productName}

Ingredients:
${ingredients}

Weight:
${weight}

Features:
${features}

Tone:
${tone}

Requirements:
- Write an attractive marketing description.
- Highlight customer benefits.
- Make it suitable for an online store.
- Make it unique and engaging.
- Do not mention AI.
`;


    const completion = await client.chat.completions.create({

      model: "llama-3.1-8b-instant",

      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],

      temperature: 0.7,

    });


    const description =
      completion.choices[0].message.content;


    const task = await Task.create({
      productName,
      ingredients,
      weight,
      features,
      tone,
      description,
    });


    res.status(201).json({
      message: "AI description generated successfully",
      task,
      description,
    });


  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "AI generation failed",
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





