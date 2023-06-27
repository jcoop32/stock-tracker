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

async function index(req, res) {
  try {
    const allStocks = await Stock.find({});
    //add if..else statement to check wheter or not the price has changed
    for (let i = 0; i < allStocks.length; i++) {
      const response = await Price.getData(allStocks[i].ticker);
      allStocks[i].price = response.data[0].price;
      //saves price to db
      allStocks[i].save();
      // const resp = await Stock.replaceOne(
      //   { _id: allStocks[i]._id },
      //   // { name: allStocks[i].name },
      //   { ticker: allStocks[i].ticker },
      //   { price: allStocks[i].price },
      //   // { createdAt: allStocks[i].createdAt },
      //   // { updatedAt: allStocks[i].updatedAtAt },
      // );
      //change value in db to current price
      // Stock.updateOne(
      //   { ticker: `${allStocks[i].ticker}` },
      //   { $set: { price: `${allStocks[i].price}` } },
      // );

      // console.log(`Price after api call: ${allStocks[i].price}`);
      // console.log(`MongoDB Price after api call: ${Stock.findOne()}`);
    }
    // const tickers = await Stock

    //need to get all tickers from db and pass to view
    res.render('stocks/index', {
      stock: allStocks,
      // price: price,
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
