const Restaurant = require("../Models/restaurant");
const Item = require("../Models/item");
const Review = require("../Models/review");
const {
  getNearbyRestaurantsSquareArea,
  getNearbyRestaurantsCircleArea,
} = require("../utils/locationFilter");
const pagination = require("../utils/pagination");

const restaurantController = {
  // Retrieve restaurants based on applied filters
  getFilteredRestaurants: async (req, res) => {
    const queries = req.query;

    // Create filter object based on passed URL parameters
    let locationArray;
    let filters = {};
    if (queries.name) filters.name = { $regex: queries.name, $options: "i" };
    if (queries.category) filters.category = queries.category;
    if (queries.loc) {
      locationArray = queries.loc.split(" ");
      filters = {
        ...filters,
        ...getNearbyRestaurantsSquareArea(locationArray),
      };
    }

    try {
      // Retrieve restaurants based on applied filters
      let restaurants = await Restaurant.find(filters);

      // Apply circular area filter if location is specified
      if (queries.loc)
        restaurants = getNearbyRestaurantsCircleArea(
          locationArray,
          restaurants,
        );

      // Paginate the results based on page and limit queries
      let list = {};
      if (restaurants.length) list = pagination(queries, restaurants);
      // Throw an error in case page query is out of bounds
      if (list instanceof Error) throw new Error(`${list.message}`);

      res.status(200).json(list);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  },

  // Retrieve a single restaurant along with its menu and reviews
  getOneRestaurantWithMenuAndReviews: async (req, res) => {
    const { id } = req.params;

    try {
      // Retrieve the restaurant by ID
      const restaurant = await Restaurant.findById(id);

      // If restaurant doesn't exist, return an error response
      if (!restaurant)
        return res.status(404).json({
          message: "Restaurant does not exist, check the provided ID",
        });

      // Retrieve items and reviews associated with the restaurant
      const items = await Item.find({ restaurantID: id });
      const restaurantReviews = await Review.find({ restaurantId: id }).limit(
        50,
      );

      // Return restaurant details, menu items, and reviews
      return res.status(200).json({ restaurant, items, restaurantReviews });
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};

module.exports = restaurantController;