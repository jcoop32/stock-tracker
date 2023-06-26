const { get } = require('jquery');
const XMLHttpRequest = require('xhr2');
// async function realtimePrice(stock) {
//   const requestOptions = {
//     method: 'GET',
//     redirect: 'follow',
//   };

//   fetch(
//     `https://api.stockdata.org/v1/data/quote?symbols=${stock}&api_token=${process.env.STOCK_DATA_KEY}`,
//     requestOptions,
//   );
//   try {
//     await response.json();
//     await result.data[0].price;
//   } catch (error) {
//     (error) => console.log('error', error);
//   }
//   //call every 5mins so 300,000 ms to stay under 100 api calls per day
// }
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

const getData = (stock) => {
  sendHttpRequest(
    'GET',
    `https://api.stockdata.org/v1/data/quote?symbols=${stock}&api_token=${process.env.STOCK_DATA_KEY}`,
  ).then((responseData) => {
    console.log(responseData.data[0].price);
    // price = responseData.data[0].price;
  });
};

// function value(a) {
//   return 1 + a;
// }

// console.log(value(1));

// console.log(getData('TSLA'));

// module.exports = {
//   getData,
// };
