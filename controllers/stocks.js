const Stock = require('../models/stock');
const Price = require('../models/apiPrice');
const { all } = require('axios');
const { get } = require('jquery');

module.exports = {
  index,
  new: newStock,
  create,
  edit,
  update,
  delete: deleteStock,
};

async function index(req, res) {
  const sendHttpRequest = (method, url) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.responseType = 'json';

      xhr.onload = () => {
        resolve(xhr.response);
      };

      xhr.send();
    });
  };
  var price;
  const getData = (stock) => {
    sendHttpRequest(
      'GET',
      `https://api.stockdata.org/v1/data/quote?symbols=${stock}&api_token=${process.env.STOCK_DATA_KEY}`,
    ).then((responseData) => {
      price = responseData.data[0].price;
      // price = responseData.data[0].price;
    });
    return price;
  };

  getData('GOOG');
  console.log(price);
  try {
    const allStocks = await Stock.find({});
    //need to get all tickers from db and pass to view
    res.render('stocks/index', {
      stock: allStocks,
      // currentPrice: await Price.getData,
      price: await getData,
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
