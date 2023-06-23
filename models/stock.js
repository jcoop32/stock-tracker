const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    ticker: { type: String, required: true },
    price: { type: Number, required: true },
    feeling: { type: String, default: 'Bullish' },
  },
  {
    timestamps: true,
  },
);

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
    `https://real-time-finance-data.p.rapidapi.com/search?query=${stockSchema.ticker}&language=en`,
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

module.exports = mongoose.model('Stock', stockSchema);
