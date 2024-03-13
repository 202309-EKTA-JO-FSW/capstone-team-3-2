const mongoose = require("mongoose");

// Define the schema for the shopping cart
const cartSchema = new mongoose.Schema(
  {
    // Reference to the user associated with the cart
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    // Reference to the restaurant associated with the cart
    restaurantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
      required: true,
    },
    // Array of items in the cart
    items: {
      type: [
        {
          // Reference to the item in the cart
          itemId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Item",
            required: true,
          },
          // Quantity of the item in the cart
          quantity: {
            type: Number,
            required: true,
            min: 1,
            default: 1,
            // Round float numbers to the nearest integer
            get: (v) => Math.round(v),
            set: (v) => Math.round(v),
          },
          // Special requirements for the item
          specialItemRequirement: String,
        },
      ],
      // Validate that each item in the cart has a unique itemId
      validate: [
        {
          validator: (val) => {
            let unique = [];
            val.forEach((item) => {
              if (unique.includes(item.itemId)) return false;
              unique.push(item.itemId);
            });
            return unique.length === val.length;
          },
          message: "Each Item in Items Array must have a unique itemId",
        },
      ],
    },
    // Special requirements for the entire cart
    specialOrderRequirement: String,
  },
  { timestamps: true }, // Automatically add createdAt and updatedAt timestamps
);

// Index to automatically delete cart documents after 45 minutes
cartSchema.index({ createdAt: 1 }, { expireAfterSeconds: 2700 });

// Export the mongoose model for the cart
module.exports = mongoose.model("Cart", cartSchema);
