// Uncomment the code below to use Sequelize ORM
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

// Uncomment the code below to use Mongoose ORM
const mongoose = require('mongoose');


const tradeSchema = new mongoose.Schema({
  id: { type: Number },
  type: { type: String, enum: ["buy", "sell"] },
  user_id: { type: Number },
  symbol: { type: String },
  shares: { type: Number },
  price: { type: Number },
  timestamp: { type: Number },


})
// Insert your model definition below

module.exports = mongoose.model('trade', tradeSchema);
