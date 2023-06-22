const { all } = require('axios');
const Stock = require('../models/stock');

module.exports = {
  index,
};

async function index(req, res) {
  try {
    const allStocks = await Stock.find({});
    res.render('stocks/index', {
      stock: allStocks,
    });
  } catch (err) {
    console.log(err);
  }
}
