const mongoose = require("mongoose");

// Define the schema for an order
const orderSchema = new mongoose.Schema(
  {
    // Date and time when the order was placed
    orderDate: {
      type: Date,
      required: true,
      default: Date.now,
    },
    // Current status of the order
    orderStatus: {
      type: String,
      required: true,
      enum: {
        values: ["delivering", "cancelled", "completed"],
        message: 'should be either "delivering", "cancelled" or "completed"',
      },
      default: "delivering",
    },
    // Total bill amount for the order
    totalBill: {
      type: Number,
      required: true,
      min: 0,
    },
    // Delivery address of the order [latitude, longitude]
    deliveryAddress: {
      type: [Number],
      required: true,
      validate: {
        validator: (v) => {
          return v.length === 2;
        },
        message: (props) => {
          return `${props.value} should be an array of two elements like [latitude, longitude]`;
        },
      },
    },
    // Delivery fee for the order
    deliveryFee: {
      type: Number,
      required: true,
      default: 5,
      min: 0,
    },
    // Reference to the user who placed the order
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    // Reference to the restaurant from which the order was placed
    restaurantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
      required: true,
    },
    // Items included in the order
    items: {
      type: [
        {
          // Reference to the item included in the order
          itemId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Item",
            required: true,
          },
          // Quantity of the item in the order
          quantity: {
            type: Number,
            required: true,
            min: 1,
            default: 1,
            // Methods to round float numbers to the nearest integer
            get: (v) => Math.round(v),
            set: (v) => Math.round(v),
          },
          // Special requirements for the item in the order
          specialItemRequirement: String,
        },
      ],
      validate: [
        {
          // Ensure items array is not empty
          validator: (val) => {
            if (val.length === 0) return false;
          },
          message: "Items field in Order must not be empty",
        },
        {
          // Ensure each item in the items array has a unique itemId
          validator: (val) => {
            let unique = [];
            val.forEach((item) => {
              if (unique.includes(item.itemId)) return false;
              unique.push(item.itemId);
            });
            if (unique.length !== val.length) return false;
          },
          message: "Each Item in Items Array must have a unique itemId",
        },
      ],
    },
    // Special requirements for the order
    specialOrderRequirement: String,
    // Details of payment for the order
    payment: {
      totalPayment: Number,
      paymentMethod: String,
    },
  },
  { timestamps: true }, // Automatically add createdAt and updatedAt timestamps
);

// Indexes for automatic deletion of orders after specified time intervals based on order status
orderSchema.index(
  { createdAt: 1 },
  {
    expireAfterSeconds: 3600,
    partialFilterExpression: {
      orderStatus: "delivering",
    },
  },
);

orderSchema.index(
  { orderDate: 1 },
  {
    expireAfterSeconds: 3600,
    partialFilterExpression: {
      orderStatus: "cancelled",
    },
  },
);

// Export the mongoose model for the order
module.exports = mongoose.model("Order", orderSchema);
