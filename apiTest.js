// const axios = require('axios');

let stock = 'GOOG';

// let config = {
//   method: 'get',
//   maxBodyLength: Infinity,
//   url: `https://real-time-finance-data.p.rapidapi.com/search?query=${stock}&language=en/price`,
//   headers: {
//     'X-RapidAPI-Key': '572f50d378msh021a6af858f5f25p163927jsn0cfc2ef4568b',
//   },
// };

// async function makeRequest() {
//   try {
//     const response = await axios.request(config);
//     console.log(response.json());
//   } catch (error) {
//     console.log(error);
//   }
// }

// makeRequest();
require('dotenv').config();

//* WORKS */
// var myHeaders = new Headers();
// myHeaders.append('X-RapidAPI-Key', process.env.X_RAPID_API_KEY);

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow',
// };

// setInterval(() => {
//   fetch(
//     `https://real-time-finance-data.p.rapidapi.com/search?query=${stock}&language=en`,
//     requestOptions,
//   )
//     .then((response) => response.json())
//     .then((result) =>
//       console.log(
//         `Stock name: ${result.data.stock[0].name}\nPrice: $${result.data.stock[0].price}`,
//       ),
//     )
//     .catch((error) => console.log('error', error));
// }, 1000);

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
};
setInterval(() => {
  fetch(
    `https://api.stockdata.org/v1/data/quote?symbols=${stock}&api_token=${process.env.STOCK_DATA_KEY}`,
    requestOptions,
  )
    .then((response) => response.json())
    .then((result) =>
      console.log(
        `Stock name: ${result.data[0].name}\nPrice: $${result.data[0].price}`,
      ),
    )
    .catch((error) => console.log('error', error));
}, 5000);

//call every 5mins so 300,000 ms to stay under 100 api calls per day
