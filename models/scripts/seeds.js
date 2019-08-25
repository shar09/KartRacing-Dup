const mongoose = require("mongoose");
const db = require("../models");

// This Deletes database and reloads data

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);

// Data
const userSeed = [
  {
    name: "The Dead Zone",
    password: "Stephen King",
    email: "1223@gmail.com",
    lap_time: 3.34,
    wins: 2,
    losses: 5
  },
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " data inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });