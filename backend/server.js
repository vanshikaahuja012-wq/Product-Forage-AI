require("dotenv").config();

const express = require("express");
const cors = require("cors");
const Groq = require("groq-sdk");
const connectDB = require("./config/db");
const Task = require("./models/Task");
const authRoutes = require("./routes/auth");

const app = express();
const PORT = process.env.PORT || 5000;

// =====================================
// GROQ AI
// =====================================
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

// =====================================
// CONNECT DATABASE
// =====================================
connectDB();

// =====================================
// MIDDLEWARE
// =====================================
app.use(cors());
app.use(express.json());

// =====================================
// AUTH ROUTES
// =====================================
app.use("/api/auth", authRoutes);

// =====================================
// HOME
// =====================================
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
    console.error("GET TASKS ERROR:", err);

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

    res.status(200).json(task);
  } catch (err) {
    console.error("GET SINGLE TASK ERROR:", err);

    res.status(500).json({
      message: err.message,
    });
  }
});

// =====================================
// AI GENERATE DESCRIPTION + SAVE
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

    // Validate product name
    if (!productName) {
      return res.status(400).json({
        message: "Product name is required",
      });
    }

    // =====================================
    // CALL GROQ AI
    // =====================================
    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",

      messages: [
        {
          role: "system",
          content: `
You are an expert e-commerce product copywriter.

Your job is to create attractive, natural and persuasive
product descriptions for online stores.

Rules:
- Write only the final product description.
- Do not mention AI.
- Do not use headings.
- Do not use markdown.
- Do not invent ingredients.
- Do not make unsupported medical or health claims.
- Make the description sound professional and human.
- Match the requested tone.
- Highlight the product's actual features.
          `,
        },

        {
          role: "user",
          content: `
Create an e-commerce product description using the following details:

Product Name: ${productName}

Ingredients:
${ingredients || "Not specified"}

Weight:
${weight || "Not specified"}

Features:
${features || "Not specified"}

Tone:
${tone || "Premium"}

Requirements:
- Write approximately 80-120 words.
- Make it engaging and suitable for an online store.
- Clearly highlight the important product features.
- Match the selected tone.
- Do not invent information.
- Return only the description.
          `,
        },
      ],

      temperature: 0.7,
      max_completion_tokens: 300,
    });

    // =====================================
    // GET AI RESPONSE
    // =====================================
    const description =
      completion.choices?.[0]?.message?.content?.trim();

    if (!description) {
      return res.status(500).json({
        message: "AI failed to generate description",
      });
    }

    // =====================================
    // SAVE AI DESCRIPTION TO MONGODB
    // =====================================
    const task = await Task.create({
      productName,
      ingredients,
      weight,
      features,
      tone,
      description,
    });

    // =====================================
    // SEND RESPONSE TO FRONTEND
    // =====================================
    return res.status(201).json({
      message: "AI description generated successfully",
      task,
      description,
    });

  } catch (err) {
    console.error("GROQ ERROR:", err);

    return res.status(500).json({
      message: "Failed to generate AI description",
      error: err.message,
    });
  }
});

// =====================================
// UPDATE PRODUCT
// =====================================
app.put("/api/tasks/:id", async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!updatedTask) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json(updatedTask);
  } catch (err) {
    console.error("UPDATE TASK ERROR:", err);

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

    res.status(200).json({
      message: "Product deleted successfully",
    });
  } catch (err) {
    console.error("DELETE TASK ERROR:", err);

    res.status(500).json({
      message: err.message,
    });
  }
});

// =====================================
// SEARCH PRODUCTS
// =====================================
app.get("/api/tasks/search/:keyword", async (req, res) => {
  try {
    const tasks = await Task.find({
      productName: {
        $regex: req.params.keyword,
        $options: "i",
      },
    });

    res.status(200).json(tasks);
  } catch (err) {
    console.error("SEARCH ERROR:", err);

    res.status(500).json({
      message: err.message,
    });
  }
});

// =====================================
// START SERVER
// =====================================
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});