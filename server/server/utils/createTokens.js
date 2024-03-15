const jwt = require("jsonwebtoken");

// Function to create access and refresh tokens
function createTokens(user) {
  // Create an access token with user information
  const accessToken = jwt.sign(
    { username: user.username, userId: user._id, isAdmin: user.isAdmin },
    process.env.SECRET_KEY,
    { expiresIn: "15m" }, // Token expires in 15 minutes
  );

  // Create a refresh token with user ID
  const refreshToken = jwt.sign(
    { userId: user._id },
    process.env.REFRESJH_TOKEN_SECRET_KEY, // Using refresh token secret key
    { expiresIn: "30d" }, // Token expires in 30 days
  );

  // Return both tokens
  return { accessToken, refreshToken };
}

// Export the function to create tokens
module.exports = createTokens;
