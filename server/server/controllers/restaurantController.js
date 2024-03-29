const Dish = require('../models/dish');
const OrderModel = require('../models/order')
const Restaurant = require('../models/restaurant');

// get all restaurant profile

const getProfile = async (req, res) => {
  const { restaurantId } = req.params;
  try {
    const profile = await Restaurant.findById(restaurantId);

    if (!profile) {
      res.status(422).json({ message: "No profile found" });
    }

    res.status(200).json(profile);
  } catch (err) {
    res.status(422).json({ message: err.message });
  }
};

// get all dishes for specific restaurant

const getAllDishes = async (req, res) => {
  const { restaurantId } = req.params;
  try {
    const menu = await Dish.find({
      restaurant: restaurantId
    });

    if (!menu || menu.length === 0) {
      res.status(422).json({ message: "No dishes found" });
    }

    res.status(200).json(menu);
  } catch (err) {
    res.status(422).json({ message: err.message });
  }
};

// get specific dish

const getSingleDish = async (req, res) => {
  const { dishId } = req.params.id;
  try {
    const dish = await Dish.findById(dishId);
    if (!dish) {
      res.status(422).json({ message: "Dish not found" });
    }

    res.status(200).json(dish);
  } catch (err) {
    res.status(422).json({ message: err.message });
  }
};

// search for specific dish

const searchDish = async (req, res) => {
  const { restaurantId } = req.params;
  const title = req.query.query;

  try {
    const regex = new RegExp(title, 'i');
    const dish = await Dish.find({ $and: [{ restaurant: restaurantId, title: { $regex: regex } }] });

    if (dish.length === 0) {
      res.status(422).json({ message: "Dish not found" });
    }

    res.status(200).json(dish);
  } catch (err) {
    res.status(422).json({ message: err.message });
  }
};

// get all orders for specific restaurant

const getOrders = async (req, res) => {
  const { restaurantId } = req.params.id;
  try {
    const orders = await OrderModel.find({
      restaurant: restaurantId
    });
    if (!orders || orders.length === 0) {
      res.status(422).json({ message: "No orders found" });
    }

    res.status(200).json(orders);
  } catch (err) {
    res.status(422).json({ message: err.message });
  }
};

// get specific order

const getOrder = async (req, res) => {
  const { orderId } = req.params.id;
  try {
    const order = await OrderModel.findById(orderId);
    if (!order) {
      res.status(422).json({ message: "Order not found" });
    }

    res.status(200).json(order);
  } catch (err) {
    res.status(422).json({ message: err.message });
  }
};

// filter through orders for specific restaurant

const filterOrders = async (req, res) => {
  const { restaurantId } = req.params;
  const { status } = req.query;
  try {
    const filteredOrders = await OrderModel.find({
      restaurant: restaurantId,
      status: status,
    });
    if (!filteredOrders || filteredOrders.length === 0) {
      res.status(422).json({ message: "No orders found" });
    }
    res.status(200).json(filteredOrders);
  } catch (err) {
    res.status(422).json({ message: err.message });
  }
};

// add new dish

const addDish = async (req, res) => {
  const { restaurantId } = req.params;
  const dishData = req.body;
  try {
    const newDish = await Dish.create({
      restaurant: restaurantId,
      ...dishData
    })
    if (!newDish) {
      res.status(422).json({ message: "Dish not added" });
    }
    res.status(201).json({ message: "Dish created successfully" });
  } catch (err) {
    res.status(422).json({ message: err.message });
  }
};

// update specific dish

const updateDish = async (req, res) => {
  const { dishId } = req.params.id;
  try {
    const updatedDish = await Dish.findByIdAndUpdate(
      dishId,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    if (!updatedDish) {
      res.status(422).json({ message: "The dish you are trying to update wasn't found" });
    }
    res.status(204).json({ message: "Dish updated successfully" });
  } catch (err) {
    res.status(422).json({ message: err.message });
  }
};

// delete specific dish

const removeDish = async (req, res) => {
  const { dishId } = req.params.id;
  try {
    const deletedDish = await Dish.findByIdAndDelete(dishId);

    if (!deletedDish) {
      res.status(422).json({ message: "The dish you are trying to delete wasn't found" });
    }
    res.status(202).json({ message: "Dish deleted successfully" });
  } catch (err) {
    res.status(422).json({ message: err.message });
  }
}

module.exports = {
  getProfile,
  getAllDishes,
  getSingleDish,
  searchDish,
  getOrders,
  getOrder,
  filterOrders,
  addDish,
  updateDish,
  removeDish
};