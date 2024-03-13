const mongoose = require("mongoose");

// Define the schema for a restaurant
const restaurantSchema = new mongoose.Schema({
  // Name of the restaurant
  name: {
    type: String,
    required: true,
  },
  // Location of the restaurant [latitude, longitude]
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
    required: true,
  },
  // Phone number of the restaurant
  phoneNumber: {
    type: String,
    required: true,
  },
  // Picture of the restaurant
  restaurantPicture: {
    type: String,
  },
  // Accepted payment methods at the restaurant
  acceptedPayment: {
    type: [String],
    required: true,
  },
  // Categories associated with the restaurant
  category: {
    type: [String],
    required: true,
  },
});

// Export the mongoose model for the restaurant
module.exports = mongoose.model("Restaurant", restaurantSchema);
