const express = require("express");
const router = express.Router();
const restaurantController = require("../Controllers/restaurantController");

// Route to get all restaurants or filter restaurants based on location, name, and/or category
router.get("/restaurants", restaurantController.getFilteredRestaurants);

// Route to get a specific restaurant by ID, including menu items and reviews
router.get(
  "/restaurants/:id",
  restaurantController.getOneRestaurantWithMenuAndReviews,
);

module.exports = router;
