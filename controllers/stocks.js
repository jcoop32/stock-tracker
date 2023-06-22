const Stock = require('../models/stock');

module.exports = {
  index,
  new: newStock,
  create,
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

function newStock(req, res) {
  res.render('stocks/new', { errorMsg: '' });
}

async function create(req, res) {
  try {
    await Stock.create(req.body);
    res.redirect('/stocks');
  } catch (err) {
    console.log(err);
  }
}
