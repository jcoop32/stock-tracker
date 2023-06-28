const Stock = require('../models/stock');
const Price = require('../models/apiPrice');

module.exports = {
  index,
  details,
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
    //https://www.w3schools.com/js/js_date_methods.asp
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

    //for loop to set price for each stock based on ticker symbol
    const allStocks = await Stock.find({});
    // add if..else statement to check wheter or not the price has changed

    for (let i = 0; i < allStocks.length; i++) {
      const response = await Price.getData(allStocks[i].ticker);
      //sets current stock price to doc field price
      allStocks[i].price = response.data[0].price;
      //saves price to db or adds new field to doc
      allStocks[i].save();
    }
    // Stock.bulkSave(allStocks);
    res.render('stocks/index', {
      stock: allStocks,
      date: date,
      time: time,
    });
  } catch (err) {
    console.log(err);
  }
}

async function details(req, res) {
  try {
    const stock = await Stock.findById(req.params.id);
    res.render('stocks/details', {
      stock: stock,
    });
  } catch (error) {
    console.log(error);
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
