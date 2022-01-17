'use strict';
const { MongoClient} = require('mongodb');
// or as an es module: 
const monthToSaveOrder = 1;
// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'BinanceModel';
const aggregationTradesTableName = 'AggregationTrades';
const client = new MongoClient(url); 

export class MongoDBHelper { 
  getTimeLastDays(days) {
    const current = new Date().getTime();
    return new Date(current - days * 24 * 60 * 60 * 1000);
  }
  getTimeLastHour(hours) {
    const current = new Date().getTime();
    return new Date(current - hours * 60 * 60 * 1000);
  }
  getTimeLastMinute(minutes) {
    const current = new Date().getTime();
    return new Date(current - minutes * 60 * 1000);
  } 

  isConnected = false;
  async connectDB() {
    if (this.isConnected === false) {
      console.log(this.isConnected);
      await client.connect();
      this.isConnected = true; 
    }
  }   
 
  async createIndexForAutoDeleteOldData(totalDays)
  {
    this.connectDB();  
    const aggregationTradesColl = client.db(dbName).collection(aggregationTradesTableName);
    const totalSeconds =  totalDays*24*60*60;   
    try {
      await aggregationTradesColl.dropIndex("tradeTime_-1");
    } catch (error) { 
    }
    return await aggregationTradesColl.createIndex({ "tradeTime": -1 }, { expireAfterSeconds: totalSeconds });
  }

  async insert(body) {
   this.connectDB(); 
   const aggregationTradesColl = client.db(dbName).collection(aggregationTradesTableName);
    return await aggregationTradesColl.insertMany(body);
  }
  
  async getAggregationTradesByType(type, count) {
    let time = new Date();
    switch (type) {
      case 'day':
        time = this.getTimeLastDays(count);
        break;
      case 'hour':
        time = this.getTimeLastHour(count);
        break;
      case 'min':
        time = this.getTimeLastMinute(count);
        break;
    }
    return await this.getAggregationTradesFrom(time);
  }
  async getAggregationTradesFrom(fromTime) {
    this.connectDB(); 
    let results =
    {
      buy:{},
      sell:{},
      buyAccumulation:
      {
        quantity:0,
        tradeWorth:0
      },
      sellAccumulation:
      {
        quantity:0,
        tradeWorth:0
      },
    };
    const aggregationTradesColl = client.db(dbName).collection(aggregationTradesTableName);
    const filteredDocs = await aggregationTradesColl.find({ tradeTime: { $gte: fromTime } }).toArray();
    filteredDocs.forEach(element => {
      if(element.isBuyerMaker)
      {
        if(!results.buy[element.price])
            results.buy[element.price]=0;
            results.buy[element.price]+=element.quantity;
            results.buyAccumulation.tradeWorth += element.tradeWorth;
            results.buyAccumulation.quantity += element.quantity;
      }
      else
      {
        if(!results.sell[element.price])
        results.sell[element.price]=0;
        results.sell[element.price]+=element.quantity;
        results.sellAccumulation.tradeWorth += element.tradeWorth;
        results.sellAccumulation.quantity += element.quantity;
      } 
    }); 
    return results;
  }

  async getVolatilityByType(type, count) {
    let time = new Date();
    switch (type) {
      case 'day':
        time = this.getTimeLastDays(count);
        break;
      case 'hour':
        time = this.getTimeLastHour(count);
        break;
      case 'min':
        time = this.getTimeLastMinute(count);
        break;
    }
    return await this.getVolatilityFrom(time);
  }

  async getVolatilityFrom(fromTime) {
    this.connectDB(); 
    const pipeline = [
      {
        '$match': {
          'eventTime': {
            '$gte': fromTime
          }
        }
      }, {
        '$group': {
          '_id': '$isBuyerMaker',
          'min': {
            '$min': {
              '$toDouble': '$price'
            }
          },
          'max': {
            '$max': {
              '$toDouble': '$price'
            }
          }
        }
      }
    ];
    const aggregationTradesColl = client.db(dbName).collection(aggregationTradesTableName);
    const aggCursor = await aggregationTradesColl.aggregate(pipeline);
    const results = {
      buy:
      {
        min:0,
        max:0
      },
      sell:
      {
        min:0,
        max:0
      },
    };
    for await (const doc of aggCursor) {
      if(doc._id)
      {
        results.buy.min = doc.min;
        results.buy.max = doc.max;
      }
      else
      {
        results.sell.min = doc.min;
        results.sell.max = doc.max; 
      } 
    } 
    return results;
  } 
} 
