const Binance = require('node-binance-api');

const binance = new Binance().options({
  APIKEY: '<>',
  APISECRET: '<>',
  useServerTime: true,
  recvWindow: 1200000, // Set a higher recvWindow to increase response timeout
  verbose: true, // Add extra output when subscribing to WebSockets, etc
  log: log => {
    console.log(log); // You can create your own logger here, or disable console output
  },
  keepAlive: true,
});

module.exports = binance

