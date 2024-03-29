const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Admin = require('../models/admin');
const Customer = require('../models/customer');
const Restaurant = require('../models/restaurant');
const Rider = require('../models/rider');

// Login with an existing user
const login = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        const users = [Admin, Customer, Restaurant, Rider];

        let user;
        let token;

        for (let userModel of users) {
            user = await userModel.findOne({ email });
            if (user) {
                const passwordMatch = await user.comparePassword(password);
                if (!user || !passwordMatch) {
                    return res.status(401).json({ message: 'Incorrect email or password' });
                }
                token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
                    expiresIn: '1d' // expires in 365 days
                });
                res.cookie('jwt', token, { httpOnly: true, maxAge: 86400000 }); // maxAge is in milliseconds (24 hours)
                return res.status(200).json({ user, token });
            }
        }
        return res.status(401).json({ message: 'Incorrect email or password' });
    } catch (error) {
        res.status(500).json({ message: error.message });

    }
};

// Register a new admin
const registerAdmin = async (req, res, next) => {
    const { firstName, lastName, email, password, phone, role } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new Admin({ firstName, lastName, email, password: hashedPassword, phone, role });
        await user.save();
        res.json({ message: 'Registration successful' });
    } catch (error) {
        res.status(500).json({ message: error.message });

    }
};

// Register a new customer
const registerCustomer = async (req, res, next) => {
    const { firstName, lastName, email, password, phone, location, street, buildingNo, avatar, role } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new Customer({ firstName, lastName, email, password: hashedPassword, phone, location, street, buildingNo, avatar, role });
        await user.validate();
        await user.save();
        res.json({ message: 'Registration successful' });
    } catch (error) {
        res.status(500).json({ message: error.message });

    }
};

// Register a new restaurant
const registerRestaurant = async (req, res, next) => {
    const { title, email, password, phone, image, role, license, street, buildingNo, area, cuisine, rate, deliveryTime, deliveryFee } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new Restaurant({ title, email, password: hashedPassword, phone, image, role, license, street, buildingNo, area, cuisine, rate, deliveryTime, deliveryFee });
        await user.save();
        res.json({ message: 'Registration successful' });
    } catch (error) {
        res.status(500).json({ message: error.message });

    }
};

// Register a new rider
const registerRider = async (req, res, next) => {
    const { firstName, lastName, email, password, phone, role, license, nationalityId, vehicleNo } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new Rider({ firstName, lastName, email, password: hashedPassword, phone, role, license, nationalityId, vehicleNo });
        await user.save();
        res.json({ message: 'Registration successful' });
    } catch (error) {
        res.status(500).json({ message: error.message });

    }
};

module.exports = { login, registerAdmin, registerCustomer, registerRestaurant, registerRider };