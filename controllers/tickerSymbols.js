const Ticker = require('../models/tickerSymbol');

module.exports = {
  search,
};

(async function (req, res) {
  try {
    let tickers = await Ticker.find({});
    console.log(tickers);
  } catch (error) {
    console.log(error);
  }
})();

async function search(req, res) {}
