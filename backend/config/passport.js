const passport = require("passport");
const GitHubStrategy = require("passport-github2").Strategy;
const User = require("../models/User");

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: `${process.env.BACKEND_URL}/api/auth/github/callback`,
    },

    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({
          githubId: profile.id,
        });

        if (!user) {
          user = await User.create({
            githubId: profile.id,
            name: profile.displayName || profile.username,
            email: profile.emails?.[0]?.value || null,
            password: null,
          });
        }

        return done(null, user);
      } catch (err) {
        console.error("GitHub authentication error:", err);
        return done(err, null);
      }
    }
  )
);

// ======================================
// SERIALIZE USER
// ======================================
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// ======================================
// DESERIALIZE USER
// ======================================
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});