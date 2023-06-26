const LivePrice = require('../models/apiPrice');

module.exports = {
  price,
};

async function price(req, res) {
  try {
    res.render('stocks/index', {
      price: LivePrice.realtimePrice,
    });
  } catch (err) {
    console.log(err);
  }
}
