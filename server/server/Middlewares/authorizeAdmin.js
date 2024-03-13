// Middleware function to authorize administrators
module.exports = function authorizeAdmin(req, res, next) {
    // Check if user is signed in
    if (!req.user)
      return res.status(401).send({ message: "User is not signed in" });
    
    // Check if user is an admin
    if (!req.user.isAdmin)
      return res.status(403).send({ message: "You are not an administrator" });
    
    // Proceed to the next middleware or route handler
    next();
  };
  