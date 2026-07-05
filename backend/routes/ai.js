const express = require("express");
const router = express.Router();
const OpenAI = require("openai");
const Task = require("../models/Task");

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

router.post("/generate-description", async (req, res) => {
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
        success: false,
        message: "Product name is required",
      });
    }

    const prompt = `
You are an expert e-commerce copywriter.

Generate an attractive product description.

Product Name: ${productName}
Ingredients: ${ingredients}
Weight: ${weight}
Features: ${features}
Tone: ${tone}

Requirements:
- Maximum 150 words
- Professional
- Highlight benefits
- Include a call-to-action.
`;

    const completion = await client.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const description = completion.choices[0].message.content;

    const task = await Task.create({
      productName,
      ingredients,
      weight,
      features,
      tone,
      description,
    });

    res.status(200).json({
      success: true,
      description,
      task,
    });

  } catch (err) {
    console.error("Groq Error:", err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;