const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    ingredients: String,
    weight: String,
    features: String,
    tone: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Task", taskSchema);