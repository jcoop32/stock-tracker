const axios = require('axios');

module.exports = {
  realtimePrice,
};

async function realtimePrice(stock) {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  fetch(
    `https://api.stockdata.org/v1/data/quote?symbols=${stock}&api_token=${process.env.STOCK_DATA_KEY}`,
    requestOptions,
  );
  try {
    await response.json();
    await result.data[0].price;
  } catch (error) {
    (error) => console.log('error', error);
  }
  //call every 5mins so 300,000 ms to stay under 100 api calls per day
}
