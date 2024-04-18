const mongoose = require("mongoose");

const connectionString = 'mongodb+srv://ivanjocc:FkE1wzTVmMv5ccWG@products.vleesjh.mongodb.net/?retryWrites=true&w=majority&appName=products';

mongoose
  .connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((e) => console.log("Problem connecting to MongoDB Atlas:", e));
