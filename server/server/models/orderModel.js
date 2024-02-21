const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  locationID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Location'
  },
  orderDate: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    required: true
  },
  totalAmount: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    required: true
  }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
