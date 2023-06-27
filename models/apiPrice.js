module.exports = {
  getData,
};

//changes key after 90 calls
let count = 0;
let key = process.env.STOCK_DATA_KEY7;
switch (count) {
  case 90:
    key = process.env.STOCK_DATA_KEY6;
    break;
  case 190:
    key = process.env.STOCK_DATA_KEY5;
    break;
  case 290:
    key = process.env.STOCK_DATA_KEY4;
    break;
  case 390:
    key = process.env.STOCK_DATA_KEY3;
    break;
  case 490:
    key = process.env.STOCK_DATA_KEY2;
    break;
  case 590:
    key = process.env.STOCK_DATA_KEY1;
    break;
  default:
    key = process.env.STOCK_DATA_KEY1;
}
async function getData(stock) {
  console.log(' in getData');

  const requestOptions = {
    method: 'GET',
  };

  try {
    const response = await fetch(
      `https://api.stockdata.org/v1/data/quote?symbols=${stock}&api_token=${key}`,
      requestOptions,
    );

    count++;
    console.log(count);
    return response.json();
  } catch (error) {
    (error) => console.log('error', error);
  }

  //call every 5mins so 300,000 ms to stay under 100 api calls per day
}
