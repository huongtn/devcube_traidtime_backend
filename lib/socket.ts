import BinanceClient from "node-binance-api";
import { Logger } from "pino";
import { AggTrade } from "./trades";

import { Common } from "./utils";

const defaultBinanceOptions = {
  APIKEY: "<>",
  APISECRET: "<>",
  useServerTime: true,
  recvWindow: 1200000, // Set a higher recvWindow to increase response timeout
  verbose: true, // Add extra output when subscribing to WebSockets, etc
  keepAlive: true,
  reconnect: true,
};

interface BinanceAggTrade {
  e: string; // Event type
  E: number; // Event time
  s: string; // Symbol
  a: number; // Aggregate trade ID
  p: string; // Price
  q: string; // Quantity
  f: number; // First trade ID
  l: number; // Last trade ID
  T: number; // Trade time
  m: boolean; // Is the buyer the market maker?
  M: boolean; // Ignore
}

export class Binance {
  private readonly binance: BinanceClient;

  constructor(options?: any, readonly logger?: Logger) {
    const resOptions = options || {};
    this.binance = new BinanceClient().options({
      log: (log) => {
        logger?.debug(log); // You can create your own logger here, or disable console output
      },
      ...defaultBinanceOptions,
      ...resOptions,
    });
  }

  startSyncAggTrades(
    symbols: string | string[],
    writeData: (data: AggTrade) => Promise<any>
  ): void {
    this.binance.websockets.aggTrades(symbols, (aggRaw: BinanceAggTrade) => {
      const price = Common.stringToFloat(aggRaw.p);
      const quantity = Common.stringToFloat(aggRaw.q);
      const trade: AggTrade = {
        aggregateTradeID: aggRaw.a,
        eventType: aggRaw.e,
        firstTradeID: aggRaw.f,
        isBuyerMaker: aggRaw.m,
        lastTradeID: aggRaw.l,
        symbol: aggRaw.s,
        price: price,
        quantity: quantity,
        eventTime: new Date(aggRaw.E),
        tradeTime: new Date(aggRaw.T),
        tradeWorth: price * quantity,
      };
      writeData(trade).catch((err) => {
        this.logger?.error(`Fetch aggregation trades: `, err);
      });
    });
  }
}
