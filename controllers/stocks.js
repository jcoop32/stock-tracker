const Stock = require('../models/stock');
const Price = require('../models/apiPrice');

module.exports = {
  index,
  new: newStock,
  create,
  edit,
  update,
  delete: deleteStock,
};

function newStock(req, res) {
  res.render('stocks/new', { errorMsg: '' });
}

async function create(req, res) {
  try {
    await Stock.create(req.body);
    // res.send(req.body);
    res.redirect('/stocks');
  } catch (err) {
    console.log(err);
  }
}

async function index(req, res) {
  try {
    const date = new Date().toLocaleDateString('en-us', {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
    const time = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
    const allStocks = await Stock.find({});
    //add if..else statement to check wheter or not the price has changed
    for (let i = 0; i < allStocks.length; i++) {
      const response = await Price.getData(allStocks[i].ticker);
      allStocks[i].price = response.data[0].price;
      //saves price to db
      allStocks[i].save();
    }

    //need to get all tickers from db and pass to view
    res.render('stocks/index', {
      stock: allStocks,
      date: date,
      time: time,
      // price: price,
    });
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
