const express = require("express");
const router = express.Router();
const customerController = require("../Controllers/customerController");

// Order specific routes

// Fetch past orders with their respective reviews and ratings for a given user (signed in)
router.get("/orders", customerController.getOrdersWithReviews);

// Fetch current order for signed in user
router.get("/current-order", customerController.getCurrentOrder);

// Delete current order for signed in user
router.patch("/cancel-order", customerController.cancelCurrentOrder);

// Checkout route for submitting signed in user cart
router.post("/checkout", customerController.createNewOrder);

// Create review for orders with no reviews
router.post("/order/review", customerController.createReview);

// Cart specific routes

// Fetch signed in user Cart if exists
router.get("/cart", customerController.getUserCart);

// Delete signed in user Cart
router.delete("/cart", customerController.deleteCart);

// Edit user cart, includes creating and updating the cart
router.patch("/cart", customerController.upsertCart);

module.exports = router;
