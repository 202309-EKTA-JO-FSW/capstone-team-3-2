const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const pagination = require("../utils/pagination");
const Order = require("../Models/order");
const Cart = require("../Models/cart");
const User = require("../Models/user");
const Item = require("../Models/item");
const Review = require("../Models/review");

const customerController = {
  // Retrieve profile details for the signed-in user
  getCustomerById: async (req, res) => {
    const id = req.user.userId;

    try {
      const customer = await User.findById(id);

      if (!customer)
        return res.status(404).json({ message: "Customer not found" });

      res.status(200).json(customer);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  },

  // Update profile details for the signed-in user
  updateCustomer: async (req, res) => {
    try {
      const id = req.user.userId;
      let password_hash;
      if (req.body.password)
        password_hash = await bcrypt.hash(req.body.password, 10);
      const updatedFields = {
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        addresses: req.body.addresses,
        password_hash,
      };

      const updatedCustomer = await User.findByIdAndUpdate(id, updatedFields, {
        runValidators: true,
        new: true,
      });

      if (!updatedCustomer)
        return res.status(404).json({ message: "Customer not found" });

      res.status(200).json({ message: "Customer updated successfully", updatedCustomer });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  },

  // Delete user account
  deleteCustomer: async (req, res) => {
    const id = req.user.userId;

    try {
      const deletedCustomer = await User.findByIdAndDelete(id);

      if (!deletedCustomer)
        return res.clearCookie("refreshToken")
                  .clearCookie("accessToken")
                  .status(404)
                  .json({ message: "Customer not found" });

      res.status(202).json({ message: "Customer deleted successfully", deletedCustomer });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  },

  // Retrieve the current order for the signed-in customer
  getCurrentOrder: async (req, res) => {
    try {
      const id = req.user.userId;
      const currentOrder = await Order.findOne({ userId: id, orderStatus: "delivering" });

      if (!currentOrder)
        return res.status(404).json({ message: "No Current Order" });

      return res.status(200).json(currentOrder);
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  // Create a new order document from the user's cart
  createNewOrder: async (req, res) => {
    try {
      const id = req.user.userId;
      const isDelivering = await Order.findOne({ userId: id, orderStatus: "delivering" });

      if (isDelivering)
        return res.status(403).json({ message: "User has a current order being delivered" });

      const userCart = await Cart.findOne({ userId: id });

      if (!userCart)
        return res.status(404).json({ message: "No Items In Cart" });

      const { totalBill, totalPayment, paymentMethod, location } = req.body;
      const newOrder = Order.create({
        totalBill: totalBill,
        deliveryAddress: location,
        userId: id,
        restaurantId: userCart.restaurantId,
        items: userCart.items,
        specialOrderRequirement: userCart.specialOrderRequirement ?? null,
        payment: {
          totalPayment: totalPayment ?? null,
          paymentMethod: paymentMethod ?? null,
        },
      });

      await Cart.deleteOne({ userId: id });

      return res.status(201).json(newOrder);
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  // Retrieve orders along with reviews for the signed-in customer
  getOrdersWithReviews: async (req, res) => {
    try {
      const id = new mongoose.Types.ObjectId(req.user.userId);
      const pipeline = [
        { $match: { userId: id } },
        {
          $lookup: {
            from: "reviews",
            localField: "_id",
            foreignField: "orderId",
            as: "review",
          },
        },
        { $sort: { orderDate: -1 } },
      ];

      const ordersWithReviews = await Order.aggregate(pipeline);

      if (!ordersWithReviews.length)
        return res.status(404).json({ message: "No Orders Found for the provided user" });

      const list = pagination(req.query, ordersWithReviews);

      return res.status(200).json(list);
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  // Create a review for an order
  createReview: async (req, res) => {
    try {
      const { orderId, rating, comment } = req.body;

      const order = await Order.findById(orderId);

      if (!order)
        return res.status(404).json({ message: "Order not found" });

      const existingReview = await Review.findOne({ orderId });

      if (existingReview)
        return res.status(400).json({ message: "Review already exists for this order" });

      const newReview = new Review({
        rating,
        comment,
        restaurantId: order.restaurantId,
        userId: order.userId,
        orderId: orderId,
      });

      const savedReview = await newReview.save();

      res.status(201).json({ message: "Review created successfully", review: savedReview });
    } catch (error) {
      console.error("Error creating review:", error);
      res.status(500).json({ message: error.message });
    }
  },

  // Retrieve user's cart
  getUserCart: async (req, res) => {
    const { userId } = req.user;
    try {
      const cart = await Cart.findOne({ userId: userId })
        .populate("restaurantId", { name: 1, restaurantPicture: 1, location: 1 })
        .populate("items.itemId");
      if (!cart)
        return res.status(404).json({ message: "Cart not found" });
      return res.json(cart);
    } catch (error) {
      return res.status(500).json(error);
    }
  },

  // Delete user's cart
  deleteCart: async (req, res) => {
    const { userId } = req.user;
    try {
      const cart = await Cart.findOne({ userId });
      if (cart)
        cart.items.forEach(async (item) => {
          await Item.findByIdAndUpdate(item.itemId, {
            $inc: { availableQuantity: item.quantity },
          });
        });
      const result = await Cart.deleteOne({ userId: userId });
      if (result.deletedCount === 0)
        return res.status(404).json({ message: "Cart not found" });
      res.json({ message: "Cart deleted" });
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // Create or update user's cart
  upsertCart: async (req, res) => {
    const { userId } = req.user;
    const {
      itemId,
      quantity,
      specialOrderRequirement,
      specialItemRequirement,
    } = req.body;

    if (quantity === 0)
      return res.status(400).json({ message: "Quantity cannot be zero" });

    try {
      const item = await Item.findById(itemId);
      if (!item) return res.status(404).json({ message: "Item not found" });

      if (item.availableQuantity === 0 && quantity > 0)
        return res.status(400).json({ message: "This item is currently out of stock." });

      const cart = await Cart.findOne({ userId });
      if (!cart) {
        if (quantity <= 0)
          return res.status(400).send({
            message: "Cannot provide negative quantity if Cart doesn't exist",
          });

        const newCart = new Cart({
          userId,
          restaurantId: item.restaurantID,
          items: [],
          specialOrderRequirement,
        });

        newCart.items.push({
          itemId,
          quantity,
          specialItemRequirement,
        });

        item.availableQuantity -= quantity;
        if (item.availableQuantity < 0)
          return res.status(403).json({
            message: "Not enough items in stock for the provided quantity.",
          });

        await newCart.save();
        await item.save();

        return res.status(201).json({ message: "New cart created successfully", Cart: newCart });
      }

      else {
        if (item.restaurantID.toString() !== cart.restaurantId.toString())
          return res.status(403).json({ message: "Items must be from the same restaurant." });

        const itemIndex = cart.items.findIndex(
          (item) => item.itemId.toString() === itemId,
        );
        if (itemIndex < 0) {
          if (quantity < 0)
            return res.status(400).json({
              message: "Cannot provide negative quantity if Item doesn't exist in Cart",
            });
          cart.items.push({
            itemId,
            quantity,
            specialItemRequirement,
          });
        }

        else {
          cart.items[itemIndex].quantity += quantity;
          if (cart.items[itemIndex].quantity < 0)
            return res.status(400).json({
              message: "Item Quantity in Cart cannot become negative",
            });

          if (cart.items[itemIndex].quantity === 0)
            cart.items.splice(itemIndex, 1);
        }

        item.availableQuantity -= quantity;
        if (item.availableQuantity < 0)
          return res.status(403).json({
            message: "Not enough items in stock for the provided quantity.",
          });

        await item.save();
        if (cart.items.length === 0) {
          await Cart.deleteOne({ userId });
          return res.status(201).json({ message: "Cart emptied successfully" });
        }
        await cart.save();

        return res.status(200).json({ message: "Cart updated successfully", cart });
      }
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};

module.exports = customerController;