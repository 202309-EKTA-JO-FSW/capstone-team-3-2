const geo = require("geolib");

// Function to get nearby restaurants within a square area based on user location
function getNearbyRestaurantsSquareArea(location) {
  // Parse latitude and longitude from location array
  const latitude = Number.parseFloat(location[0], 10);
  const longitude = Number.parseFloat(location[1], 10);

  // Calculate bounds of a square area with a radius of 4km around the provided location
  const bounds = geo.getBoundsOfDistance(
    { latitude: latitude, longitude: longitude },
    4000 // Distance in meters
  );

  // Extract minimum and maximum latitude and longitude from bounds
  const minLat = bounds[0].latitude;
  const maxLat = bounds[1].latitude;
  const minLon = bounds[0].longitude;
  const maxLon = bounds[1].longitude;

  // Return object to filter restaurants within the calculated square area
  return {
    "location.0": { $gte: minLat, $lte: maxLat },
    "location.1": { $gte: minLon, $lte: maxLon }
  };
}

// Function to further filter restaurants within a circular area (5km radius) based on user location
function getNearbyRestaurantsCircleArea(location, array) {
  // Parse user's latitude and longitude from location array
  const userLocation = {
    latitude: Number.parseFloat(location[0], 10),
    longitude: Number.parseFloat(location[1], 10)
  };

  // Filter restaurants within 5km radius of user's location
  const squareToCircle = array.filter((restaurant) => {
    const restauarantLocation = {
      latitude: restaurant.location[0],
      longitude: restaurant.location[1]
    };

    // Calculate distance between user and restaurant
    const distance = geo.getDistance(userLocation, restauarantLocation);

    // Include restaurant if it's within 5km radius
    if (distance <= 4000) return true;
    return false;
  });

  // Return filtered restaurants within circular area
  return squareToCircle;
}

// Export functions for getting nearby restaurants
module.exports = {
  getNearbyRestaurantsSquareArea,
  getNearbyRestaurantsCircleArea
};
