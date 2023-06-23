// const axios = require('axios');

let stock = 'AAPL';

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

var myHeaders = new Headers();
myHeaders.append(
  'X-RapidAPI-Key',
  '572f50d378msh021a6af858f5f25p163927jsn0cfc2ef4568b',
);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
};

setInterval(() => {
  fetch(
    `https://real-time-finance-data.p.rapidapi.com/search?query=${stock}&language=en`,
    requestOptions,
  )
    .then((response) => response.json())
    .then((result) =>
      console.log(
        `Stock name: ${result.data.stock[0].name}\nPrice: $${result.data.stock[0].price}`,
      ),
    )
    .catch((error) => console.log('error', error));
}, 10000);