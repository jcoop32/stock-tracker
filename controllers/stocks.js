const Stock = require('../models/stock');
const Price = require('../models/apiPrice');
const { all } = require('axios');

module.exports = {
  index,
  new: newStock,
  create,
  edit,
  update,
  delete: deleteStock,
};

async function index(req, res) {
  console.log(Price.realtimePrice().then());
  try {
    const allStocks = await Stock.find({});
    //need to get all tickers from db and pass to view
    res.render('stocks/index', {
      stock: allStocks,
      currentPrice: Price.realtimePrice,
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

async function edit(req, res) {
  try {
    Stock.findById(req.params.id).then((stock) => {
      res.render('stocks/edit', {
        stock: stock,
      });
    });
  } catch (err) {
    console.log(err);
  }
}

async function update(req, res) {
  try {
    await Stock.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.redirect('/stocks');
  } catch (err) {
    console.log(err);
  }
}

async function deleteStock(req, res) {
  try {
    await Stock.findByIdAndRemove(req.params.id);
    res.redirect('/stocks');
  } catch (err) {
    console.log(err);
  }
}
