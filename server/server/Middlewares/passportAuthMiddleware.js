// Middleware function for passport authentication
const passport = require("passport");

module.exports = function passportAuthMiddleware(req, res, next) {
  // Authenticate user using Passport
  passport.authenticate(["jwt"], (err, user, info) => {
    // Handle authentication errors
    if (err) return res.status(500).json(err);
    // Handle authentication failures
    if (info)
      return res.status(401).json({
        error: { name: info[0].name, message: info[0].message, ...info[0] },
      });
    // Set authenticated user if authentication is successful
    if (user) req.user = user;
    // Proceed to the next middleware or route handler
    return next();
  })(req, res, next);
};
