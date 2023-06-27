const { response } = require('express');
const { error, data } = require('jquery');

module.exports = {
  getData,
};

async function getData(stock) {
  console.log(' in getData');

  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  try {
    const response = await fetch(
      `https://api.stockdata.org/v1/data/quote?symbols=${stock}&api_token=${process.env.STOCK_DATA_KEY2}`,
      requestOptions,
    );
    // console.log('fetch: ', response.data[0].price);

    return response.json();
    // return response.json(response.data[0].price);
  } catch (error) {
    (error) => console.log('error', error);
  }

  // try {
  //   await response.json();
  //   await result.data[0].price;
  // } catch (error) {
  //   (error) => console.log('error', error);
  // }
  //call every 5mins so 300,000 ms to stay under 100 api calls per day
}
