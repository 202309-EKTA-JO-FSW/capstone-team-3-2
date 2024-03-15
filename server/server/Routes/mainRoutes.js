const express = require("express");
const router = express.Router();
const passportAuthMiddleware = require("../Middlewares/passportAuthMiddleware");
const authorizeAdmin = require("../Middlewares/authorizeAdmin");
const signingController = require("../Controllers/signingController");

// Public API route for fetching restaurants
router.use("/", require("./restaurantRoutes"));

// Public API routes for sign in and sign up
router.use("/", require("./signRoutes"));

// Customer specific routes
router.use("/", passportAuthMiddleware, require("./customerRoutes"));

// Admin specific routes
router.use(
  "/admin",
  passportAuthMiddleware,
  authorizeAdmin,
  require("./adminRoutes"),
);

// Route for refreshing expired tokens, works for admin and customer
router.get("/refreshToken", signingController.refreshToken);

// Sign-out route
router.post("/signout", passportAuthMiddleware, signingController.signOut);

module.exports = router;
