module.exports = {
  getData,
};

//changes key after 90 calls

let count = 0;
key = process.env.STOCK_DATA_KEY6;
switch (count) {
  case 9:
    key = process.env.STOCK_DATA_KEY6;
    break;
  case 18:
    key = process.env.STOCK_DATA_KEY5;
    break;
  case 27:
    key = process.env.STOCK_DATA_KEY4;
    break;
  case 36:
    key = process.env.STOCK_DATA_KEY3;
    break;
  case 45:
    key = process.env.STOCK_DATA_KEY2;
    break;
  case 54:
    key = process.env.STOCK_DATA_KEY1;
    break;
  // default:
  //   key = process.env.STOCK_DATA_KEY1;
}

console.log(key);
async function getData(stock) {
  console.log(' in getData');

  const requestOptions = {
    method: 'GET',
  };

  try {
    //https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
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
