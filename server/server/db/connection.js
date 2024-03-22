const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME, TEST_DB_HOST } =
  process.env;

const DB_URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${process.env.NODE_ENV === "test" ? TEST_DB_HOST : DB_HOST
  }:${DB_PORT}/${DB_NAME}?authSource=admin`;

const uri = 'mongodb+srv://alshobakisanad:hRCfWs2PUilQXgmK@cluster0.aomhchz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const url = uri;

const connectToMongo = () => {
  mongoose.connect(url, { useNewUrlParser: true });

  db = mongoose.connection;

  db.once("open", () => {
    console.log("Database connected: ", url);
  });

  db.on("error", (err) => {
    console.error("Database connection error: ", err);
  });
};

module.exports = connectToMongo;
