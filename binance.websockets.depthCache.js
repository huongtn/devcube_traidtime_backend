

//https://github.com/jaggedsoft/node-binance-api/issues?q=depthCache
//https://docs.google.com/document/u/2/d/1Q41juq5Fxq20hLU7HPsk3W3HWOnkjaVcKD4Osj4_Oxw/edit

const express = require('express')
const app = express()
const port = 4001

var server = app.listen(port);

const binance =  require("./binance.connection.js")

const io = require("socket.io")(server,{
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

io.on('connection', (socket) => {
  console.log('user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

let bids, asks, symbol_, bestBid, bestAsk, lastUpdates;

let sendDepthToClientEachMS = 5000;//ms

function sendDepthToClient() {

  io.sockets.emit('DEPTH', 
    {
     'symbol':symbol_, 
     'bids':bids, 
     'asks':asks, 
     'bestBid':bestBid, 
     'bestAsk':bestAsk,
     'lastUpdates':lastUpdates
    });
}
setInterval(sendDepthToClient, sendDepthToClientEachMS);

binance.websockets.depthCache('ETHUSDT', (symbol, depth)  => {

  bids = binance.sortBids(depth.bids);
  asks = binance.sortBids(depth.asks);
  bestBid = binance.first(bids);
  bestAsk = binance.first(asks)
  symbol_ = 'Binance spot - '+symbol;
  lastUpdates = new Date(depth.eventTime);

  //console.log('depth',depth.bids)

  //sendDepthToClient()
},/*related to 1000 access resources limit, not sure here*/);


//-------------------------------------------------------------

  /*
  "e": "aggTrade",  // Event type
  "E": 123456789,   // Event time
  "s": "BNBBTC",    // Symbol
  "a": 12345,       // Aggregate trade ID
  "p": "0.001",     // Price
  "q": "100",       // Quantity
  "f": 100,         // First trade ID
  "l": 105,         // Last trade ID
  "T": 123456785,   // Trade time
  "m": true,        // Is the buyer the market maker?
  "M": true         // Ignore
  */


// let eventsCounterinAccamulation=0,counterstartTradeTime,endTradeTime,accumalativePrice,accumalativeQuantity,isBuyerMarketMakerCurrent;

// binance.websockets.aggTrades(['ETHUSDT'], (trades) => {

//   let {e:eventType, E:eventTime, T:tradeTime, s:symbol, p:price, q:quantity, m:isBuyerMarketMaker} = trades;

//   if(isBuyerMarketMaker)
//   {
    
//   }
//   else
//   {


//   }
//   isBuyerMarketMakerCurrent = isBuyerMarketMaker;





  

  // x = new Date(tradeTime)
  // console.log(x)

  
  //console.log(trades)

  //counter=counter+1;
  
//});









// const ws = require('ws')
// const w = new ws('wss://api-pub.bitfinex.com/ws/2')

// w.on('message', (msg) => console.log(msg))

// let msg = JSON.stringify({ 
//   event: 'subscribe', 
//   channel: 'book', 
//   symbol: 'tETHUSD' 
// })

// w.on('open', () => w.send(msg))

// const ws = require('ws')
// const w = new ws('wss://api-pub.bitfinex.com/ws/2')

// w.on('message', (msg) => console.log('bitfin',msg))

// let msg = JSON.stringify({ 
//   event: 'subscribe', 
//   channel: 'book', 
//   symbol: 'tETHUSD' 
// })

// w.on('open', () => w.send(msg))


// const ws = require('ws')
// const w = new ws('wss://api-pub.bitfinex.com/ws/2')

// w.on('message', (msg) => console.log(msg))

// let msg = JSON.stringify({ 
//   event: 'subscribe', 
//   channel: 'trades', 
//   symbol: 'tETHUSD' 
// })

// w.on('open', () => w.send(msg))


// const ws = require('ws')
// const w = new ws('wss://api-pub.bitfinex.com/ws/2')

// w.on('message', (msg) => console.log(msg))

// let msg = JSON.stringify({ 
//   event: 'subscribe', 
//   channel: 'book',
//   prec: 'R0',
//   symbol: 'tETHUSD' 
// })

// w.on('open', () => w.send(msg))






// binance.websockets.trades(['ETHUSDT'], (trades) => {
//   //let {e:eventType, E:eventTime, s:symbol, p:price, q:quantity, m:maker, a:tradeId} = trades;
//   //console.info(symbol+" trade update. price: "+price+", quantity: "+quantity+", maker: "+maker);

//   console.log('trades',trades)
  /*
  
  "e": "trade",     // Event type
  "E": 123456789,   // Event time
  "s": "BNBBTC",    // Symbol
  "t": 12345,       // Trade ID
  "p": "0.001",     // Price
  "q": "100",       // Quantity
  "b": 88,          // Buyer order ID
  "a": 50,          // Seller order ID
  "T": 123456785,   // Trade time
  "m": true,        // Is the buyer the market maker?
  "M": true         // Ignore

  */

//});




// binance.websockets.aggTrades(['ETHUSDT'], (trades) => {

  /*
  "e": "aggTrade",  // Event type
  "E": 123456789,   // Event time
  "s": "BNBBTC",    // Symbol
  "a": 12345,       // Aggregate trade ID
  "p": "0.001",     // Price
  "q": "100",       // Quantity
  "f": 100,         // First trade ID
  "l": 105,         // Last trade ID
  "T": 123456785,   // Trade time
  "m": true,        // Is the buyer the market maker?
  "M": true         // Ignore
  */

  // let {e:eventType, E:eventTime, s:symbol, p:price, q:quantity, m:maker, a:tradeId} = trades;
  // console.info(symbol+" trade update. price: "+price+", quantity: "+quantity+", maker: "+maker);
// console.log(trades)

// });












//do not understand why do not see that data in depthCache... check ...
// binance.websockets.depth('ETHUSDT', (depth) => {
//   let {e:eventType, E:eventTime, s:symbol, u:updateId, b:bidDepth, a:askDepth} = depth;
//   console.info('*******************************************');
//   console.info(symbol+" market depth update");
//   console.info('bid');
//   console.info(bidDepth);
//   console.info('---');
//   console.info('ask');
//   console.info(askDepth);
// });


//binance.websockets.bookTickers( 'ETHUSDT', console.log );


// binance.websockets.aggTrades(['ETHUSDT'], (trades) => {
//   let {e:eventType, E:eventTime, s:symbol, p:price, q:quantity, m:maker, a:tradeId} = trades;
//   console.info(symbol+" trade update. price: "+price+", quantity: "+quantity+", maker: "+maker);
// });

// binance.websockets.miniTicker(markets => {
//   console.info(markets);
// });

// For a specific symbol:
// binance.websockets.prevDay('ETHUSDT', (error, response) => {
//   console.info(response);
// });


