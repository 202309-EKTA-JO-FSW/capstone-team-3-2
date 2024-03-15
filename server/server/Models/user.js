const mongoose = require("mongoose");

// Define the schema for a user
const userSchema = new mongoose.Schema(
  {
    // Username of the user
    username: {
      type: String,
      required: true,
      unique: true,
    },
    // Hashed password of the user
    password_hash: {
      type: String,
      required: true,
    },
    // Email of the user
    email: {
      type: String,
      required: true,
      unique: true,
    },
    // First name of the user
    firstName: {
      type: String,
      required: true,
    },
    // Last name of the user
    lastName: {
      type: String,
      required: true,
    },
    // Path to the profile picture of the user
    profilePicture: String,
    // Phone number of the user
    phoneNumber: {
      type: String,
      unique: true,
    },
    // Indicates if the user is an admin
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    // Addresses associated with the user
    addresses: [
      {
        // Name of the address
        addressName: {
          type: String,
          required: true,
        },
        // Location coordinates of the address [latitude, longitude]
        location: {
          type: [Number],
          validate: {
            validator: (v) => {
              return v.length === 2;
            },
            message: (props) => {
              return `${props.value} should be an array of two elements like [latitude, longitude]`;
            },
          },
        },
      },
    ],
    // Reference to the user's shopping cart
    cart: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cart",
    },
  },
  {
    timestamps: true,
  }
);

// Export the mongoose model for the user
module.exports = mongoose.model("User", userSchema);
