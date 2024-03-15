// Import required modules
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const passportStratigies = require("./configs/passport");

// Load environment variables from .env file
require("dotenv").config();

// Import database connection function
const connectToMongo = require("./db/connection");

// Create an Express app
const app = express();

// Define the port based on the environment
const port =
  process.env.NODE_ENV === "test"
    ? process.env.NODE_LOCAL_TEST_PORT
    : process.env.NODE_LOCAL_PORT;

// Middleware setup
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded bodies
app.use(express.json()); // Parse JSON bodies
app.use(cookieParser()); // Parse cookies

// Initialize Passport strategies
passportStratigies(passport);
app.use(passport.initialize());

// API versioning
app.use("/", require("./Routes/mainRoutes")); // Mount main API routes

// If in development mode, start the server and connect to MongoDB
if (process.env.NODE_ENV === "development") {
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    connectToMongo(); // Connect to MongoDB
  });
}

// For testing purposes, use passport authentication middleware on the /test endpoint
const passportAuthMiddleware = require("./Middlewares/passportAuthMiddleware");
const authorizeAdmin = require("./Middlewares/authorizeAdmin");
app.get("/test", passportAuthMiddleware, authorizeAdmin, (req, res) => {
  // Send a test response
  res.json(
    "Server connection to client works!! Good Luck with your capstones :D"
  );
});

// Export the Express app
module.exports = app;
