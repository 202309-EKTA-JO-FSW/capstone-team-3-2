const JwtStrategy = require("passport-jwt").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../Models/user");

// Function to extract JWT token from cookie
const cookieExtractor = function (req) {
  let token;
  if (req && req.cookies) {
    token = req.cookies["accessToken"];
  }
  return token;
};

// Function to configure Passport strategies
function passportStrategies(passport) {
  // JWT Strategy
  passport.use(
    new JwtStrategy(
      {
        jwtFromRequest: cookieExtractor,
        secretOrKey: process.env.SECRET_KEY,
      },
      (payload, done) => {
        if (payload) return done(null, payload);
        return done(new Error("No Payload"), false);
      },
    ),
  );

  // Google OAuth2.0 Strategy
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3001/v1/google/callback",
      },
      async function verify(accessToken, refreshToken, profile, cb) {
        const userData = profile._json;
        // Check if user exists
        const user = await User.findOne({ email: userData.email });
        if (!user) {
          // Create new user if not exist
          return User.create({
            username: userData.given_name,
            email: userData.email,
            password_hash: "signed with google",
            firstName: userData.given_name,
            lastName: userData.family_name,
            profilePicture: userData.picture,
          })
            .then((newUser) => cb(null, newUser)) // Return user to callback route
            .catch((err) => cb(err, null)); // Return error if failed
        }
        // If found, return user
        return cb(null, user);
      },
    ),
  );
}

module.exports = passportStrategies;
