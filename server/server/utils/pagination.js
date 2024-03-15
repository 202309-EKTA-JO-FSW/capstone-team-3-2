// Function to handle pagination
function pagination(queries, results) {
    // Parse page and limit from query parameters, default to 1 and 20 respectively
    const page = parseInt(queries.page, 10) || 1;
    const limit = parseInt(queries.limit, 10) || 20;
  
    // Calculate start and end index based on page and limit
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
  
    // Slice the results array to get the portion for the current page
    const restaurantList = results.slice(startIndex, endIndex);
  
    // Calculate total number of pages
    const totalPages = Math.ceil(results.length / limit);
  
    // Check if requested page is within valid range
    if (page > totalPages || page < 1)
      return Error(
        `Page should be in total pages range, you requested ${page}. Pages range is 1 - ${totalPages}`
      );
  
    // Return pagination metadata along with results for the current page
    return {
      page: page,
      totalPages: totalPages,
      totalResult: results.length,
      results: restaurantList,
    };
  }
  
  // Export the pagination function
  module.exports = pagination;
  