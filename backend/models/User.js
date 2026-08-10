const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: false,
      unique: true,
      sparse: true,
    },

    password: {
      type: String,
      required: false,
      default: null,
    },

    // GitHub account ID
    githubId: {
      type: String,
      default: null,
      sparse: true,
    },

    // Google account ID
    googleId: {
      type: String,
      default: null,
      sparse: true,
    },

    // Google profile picture
    profilePicture: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);