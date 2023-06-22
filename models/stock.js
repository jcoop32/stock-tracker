const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    ticker: { type: String, required: true },
    price: { type: Number, required: true },
    feeling: { type: String, default: 'Bullish' },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Stock', stockSchema);
