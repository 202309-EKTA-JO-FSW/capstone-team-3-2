const mongoose = require("mongoose");

// Define the schema for a review
const reviewSchema = new mongoose.Schema(
  {
    // Rating given in the review
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
      // Transform number to integer
      get: (v) => Math.round(v),
      set: (v) => Math.round(v),
    },
    // Comment provided in the review
    comment: {
      type: String,
    },
    // Date of the review
    reviewDate: {
      type: Date,
      required: true,
      default: Date.now,
    },
    // ID of the restaurant being reviewed
    restaurantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
      required: true,
    },
    // ID of the user who created the review
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    // ID of the order associated with the review
    orderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

// Export the mongoose model for the review
module.exports = mongoose.model("Review", reviewSchema);
