
const verifyAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
};
const verifyUser = (userRole) => {
    return (req, res, next) => {
        if (req.user && userRole.includes(req.user.role)) {
            next();
        } else {
            res.status(401).json({ message: 'Unauthorized' });
        }
    }
};

const verifyCustomer = (req, res, next) => {
    if (req.user && req.user.role === 'customer') {
        next();
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
};

const verifyRestauarant = (req, res, next) => {
    if (req.user && req.user.role === 'restaurant') {
        next();
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
};

const verifyRider = (req, res, next) => {
    if (req.user && req.user.role === 'rider') {
        next();
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
};


module.exports = { verifyAdmin, verifyCustomer, verifyRestauarant, verifyRider, verifyUser };