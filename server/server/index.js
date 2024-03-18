const express = require("express");
const cors = require("cors");
const userRoutes = require('./routes/userRoutes')
const customerRoutes = require('./routes/customerRoutes');
const adminRoutes = require('./routes/adminRoutes');
const restaurantRoutes = require('./routes/restaurantRoutes');
const riderRoutes = require('./routes/riderRoutes');



require("dotenv").config();

const connectToMongo = require("./db/connection");

const app = express();
const port =
  process.env.NODE_ENV === "test"
    ? process.env.NODE_LOCAL_TEST_PORT
    : process.env.NODE_LOCAL_PORT;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  connectToMongo();
});

app.get("/test", (req, res) => {
  res.json(
    "Server connection to client works!!  Good Luck with your capstones :D"
  );
});

app.use('/api/users', userRoutes)
app.use('/api/admin', adminRoutes);
app.use('/api/customer', customerRoutes);
app.use('/api/restaurant', restaurantRoutes);
app.use('/api/rider', riderRoutes);

module.exports = app;
