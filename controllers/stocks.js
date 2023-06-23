const Stock = require('../models/stock');

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
