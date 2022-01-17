import { MongoDBHelper } from "../database/mongodb";
import MongoClient from "../database/mongodb.client";
import { Binance } from "./socket";

/** https://dev.binance.vision/t/recent-trades-historical-and-aggregate/128/2 */
export interface AggTrade {
  eventType: string;
  /** UTC time */
  eventTime: Date;
  symbol: string;
  aggregateTradeID: number;
  price: number;
  quantity: number;
  firstTradeID: number;
  lastTradeID: number;
  /** Price multiplied by quantity */
  tradeWorth: number;
  /** UTC time */
  tradeTime: Date;
  /** The isBuyerMaker flag is used to convey which side initiated the trade:
   * the buy-side or the sell-side. The side that initiates the trade is the “taker”
   * and the side which was already on the order book is the “taker”.
   * Some trading indicators and algorithms use this data. */
  isBuyerMaker: boolean;
}

interface Report {
  price: {
    min: number | null;
    max: number | null;
  };
  startTime: Date | null;
  endTime: Date | null;
  sell: {
    quantity: number;
    totalPrice: number;
  };
  buy: {
    quantity: number;
    totalPrice: number;
  };
}

export class AggTrades {
  static aggTrades: AggTrades;
  private readonly binance: Binance;

  constructor(private readonly mongoClient: MongoDBHelper) {
    this.binance = new Binance();
  }

  static async instance(): Promise<AggTrades> {
    if (AggTrades.aggTrades) return AggTrades.aggTrades;

    const mongoClient = await MongoClient();
    AggTrades.aggTrades = new AggTrades(mongoClient);
    return AggTrades.aggTrades;
  }

  async save(symbols: string | string[]): Promise<void> {
    this.binance.startSyncAggTrades(symbols, (data: AggTrade) =>
      this.mongoClient.insert(data)
    );
  }

  async getReport(from?: string, to?: string): Promise<Report> {
    const aggTrades = await this.mongoClient.getAggregationTrades(from, to);  
    return this.aggTradesToReport(aggTrades);
  }
  
  private aggTradesToReport(aggTrades: AggTrade[], isHigh = true): Report {
    const res: Report = {
      price: {
        min: null,
        max: null,
      },
      startTime: null,
      endTime: null,
      sell: {
        quantity: 0,
        totalPrice: 0,
      },
      buy: {
        quantity: 0,
        totalPrice: 0,
      },
    };
    for (const item of aggTrades) {
      if (item.isBuyerMaker) {
        res.buy.quantity += item.quantity;
        res.buy.totalPrice += item.tradeWorth;
      } else {
        res.sell.quantity += item.quantity;
        res.sell.totalPrice += item.tradeWorth;
      }

      if (res.price.min) {
        res.price.min = item.price < res.price.min ? item.price : res.price.min;
        res.price.max = item.price > res.price.max ? item.price : res.price.max;
      } else {
        res.price.min = item.price;
        res.price.max = item.price;
      }

      const itemTime = new Date(item.eventTime);
      if (res.startTime) {
        res.startTime = itemTime < res.startTime ? itemTime : res.startTime;
        res.endTime = itemTime > res.endTime ? itemTime : res.endTime;
      } else {
        res.startTime = itemTime;
        res.endTime = itemTime;
      }
    }

    return res;
  }
}

// function toReportString()string {

// }

// function getReport(minutes = 0): string {
//   const lastTime = parseMinutes(minutes);

//   // let soldQuantity: number = 0;
//   // let boughtQuantity: number = 0;
//   // let highestPrice: number = 0;
//   // let lowestPrice: number = 0;
//   // const accumulation =
//   // const soldInOrder = Object.values(order.asks).reduce((previousValue, currentValue) => previousValue + currentValue, 0)
//   // const boughtInOrder = Object.values(order.bids).reduce((previousValue, currentValue) => previousValue + currentValue, 0)
//   // soldQuantity += soldInOrder;
//   // boughtQuantity += boughtInOrder;

//   let allOrders: Order = null;

//   orderList.forEach((order) => {
//     if (!allOrders) {
//       allOrders = order;
//     }

//     allOrders.asks = { ...allOrders.asks, ...order.asks };
//     allOrders.bids = { ...allOrders.bids, ...order.bids };
//     allOrders.bestAsk =
//       allOrders.bestAsk > order.bestAsk ? allOrders.bestAsk : order.bestAsk;
//     allOrders.bestBid =
//       allOrders.bestBid > order.bestBid ? allOrders.bestBid : order.bestBid;
//   });

//   // let priceHigh = 0;
//   // let priceLow: string;
//   // let soldNumber: number;
//   // let boughtNumber: number;

//   const {
//     averagePrice: highAveragePrice,
//     price: highPrice,
//     weight: soldWeight,
//   } = getItemReport(allOrders.asks);
//   const {
//     averagePrice: lowAveragePrice,
//     price: lowPrice,
//     weight: boughtWeight,
//   } = getItemReport(allOrders.bids, false);

//   return `Last ${lastTime}\n\n${soldWeight} ${
//     allOrders.symbol_
//   } sold - total value ${soldWeight * highAveragePrice}\n\n${boughtWeight} ${
//     allOrders.symbol_
//   } bought - total value ${
//     boughtWeight * lowAveragePrice
//   }\n\nHigh price - ${highPrice}\n\nLow price - ${lowPrice}`;

//   // return {
//   //   lowAveragePrice,
//   //   highAveragePrice,
//   //   highPrice,
//   //   lowPrice,
//   //   soldWeight,
//   //   boughtWeight,
//   // };

//   // Object.entries(allOrders.asks).forEach(([key, value]) => {
//   //   soldNumber += value;
//   //   const currPrice = stringToInt(key);
//   //   priceHigh = currPrice > priceHigh ? currPrice : priceHigh;
//   // });
//   // Object.entries(allOrders.bids).forEach(([key, value]) => {
//   //   boughtNumber += value;
//   //   const currPrice = stringToInt(key);
//   //   priceHigh = currPrice > priceHigh ? currPrice : priceHigh;
//   // });
//   // const boughtNumber = Object.values(allOrders.bids).reduce(
//   //   (previousValue, currentValue) => previousValue + currentValue,
//   //   0
//   // );
// }
