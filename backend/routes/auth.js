const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const { OAuth2Client } = require("google-auth-library");

const User = require("../models/User");

const router = express.Router();

// ======================================
// GOOGLE CLIENT
// ======================================
const googleClient = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID
);

// ======================================
// REGISTER
// ======================================
router.post(
  "/register",
  [
    body("name")
      .notEmpty()
      .withMessage("Name is required"),

    body("email")
      .isEmail()
      .withMessage("Valid email required"),

    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
  ],

  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    try {
      const { name, email, password } = req.body;

      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return res.status(400).json({
          message: "Email already exists",
        });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await User.create({
        name,
        email,
        password: hashedPassword,
      });

      res.status(201).json({
        message: "User registered successfully",
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      });
    } catch (err) {
      console.error("Register error:", err);

      res.status(500).json({
        message: err.message,
      });
    }
  }
);

// ======================================
// LOGIN
// ======================================
router.post(
  "/login",
  [
    body("email")
      .isEmail()
      .withMessage("Valid email required"),

    body("password")
      .notEmpty()
      .withMessage("Password is required"),
  ],

  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({
          message: "Invalid email or password",
        });
      }

      // Google-only/GitHub-only account
      if (!user.password) {
        return res.status(400).json({
          message:
            "This account uses Google or GitHub login. Please use the appropriate login option.",
        });
      }

      const isMatch = await bcrypt.compare(
        password,
        user.password
      );

      if (!isMatch) {
        return res.status(400).json({
          message: "Invalid email or password",
        });
      }

      const token = jwt.sign(
        {
          id: user._id,
          email: user.email,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "7d",
        }
      );

      res.status(200).json({
        message: "Login successful",
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      });
    } catch (err) {
      console.error("Login error:", err);

      res.status(500).json({
        message: err.message,
      });
    }
  }
);

// ======================================
// GOOGLE LOGIN / SIGN UP
// ======================================
router.post("/google", async (req, res) => {
  try {
    const { credential } = req.body;

    if (!credential) {
      return res.status(400).json({
        message: "Google credential is required",
      });
    }

    // Verify Google's ID token
    const ticket = await googleClient.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    if (!payload) {
      return res.status(401).json({
        message: "Invalid Google token",
      });
    }

    const {
      sub: googleId,
      email,
      name,
      picture,
      email_verified,
    } = payload;

    // Make sure Google verified the email
    if (!email || !email_verified) {
      return res.status(401).json({
        message: "Google email could not be verified",
      });
    }

    // ======================================
    // FIND USER
    // ======================================
    let user = await User.findOne({ email });

    // ======================================
    // CREATE USER IF NEW
    // ======================================
    if (!user) {
      user = await User.create({
        name: name || email.split("@")[0],
        email,
        googleId,
        profilePicture: picture || null,
        password: null,
      });
    } else {
      // Existing account
      // Link Google account if it isn't already linked
      if (!user.googleId) {
        user.googleId = googleId;
      }

      if (picture && !user.profilePicture) {
        user.profilePicture = picture;
      }

      await user.save();
    }

    // ======================================
    // CREATE YOUR JWT
    // ======================================
    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    // ======================================
    // SEND RESPONSE
    // ======================================
    res.status(200).json({
      message: "Google login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        profilePicture: user.profilePicture,
      },
    });
  } catch (err) {
    console.error("Google authentication error:", err);

    res.status(401).json({
      message: "Google authentication failed",
    });
  }
});

module.exports = router;