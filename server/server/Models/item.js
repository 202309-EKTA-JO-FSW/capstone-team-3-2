const mongoose = require("mongoose");

// Define the schema for an item
const itemSchema = new mongoose.Schema(
  {
    // Title of the item
    title: {
      type: String,
      required: true,
    },
    // Description of the item
    description: {
      type: String,
      required: true,
    },
    // Price of the item
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    // URL of the item picture
    itemPicture: {
      type: String,
    },
    // Reference to the restaurant that offers the item
    restaurantID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
      required: true,
    },
    // Categories the item belongs to
    category: {
      type: [String],
      required: true,
    },
    // Available quantity of the item
    availableQuantity: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  { timestamps: true }, // Automatically add createdAt and updatedAt timestamps
);

// Export the mongoose model for the item
module.exports = mongoose.model("Item", itemSchema);
