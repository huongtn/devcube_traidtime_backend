import { InsertManyResult, MongoClient, MongoClientOptions } from "mongodb";
import { Logger } from "pino";

// const monthToSaveOrder = 1;
const DEFAULT_DB_NAME = "BinanceModel";
const aggregationTradesTableName = "AggregationTrades";
const APP_NAME = "Cryptocurrency";

export interface MongoDBHelperConfig {
  url: string;
  dbName?: string;
  options?: MongoClientOptions;
  logger?: Logger;
}

export class MongoDBHelper {
  static mongoDBHelper: MongoDBHelper;
  private readonly client: MongoClient;
  private connected: boolean = false;
  private readonly dbName: string;
  private readonly logger: Logger;

  constructor(config: MongoDBHelperConfig) {
    this.client = new MongoClient(config.url, {
      appName: APP_NAME,
      ...config.options,
    });
    this.dbName = config.dbName || DEFAULT_DB_NAME;
    this.logger = config.logger;
  }

  static async instance(config: MongoDBHelperConfig): Promise<MongoDBHelper> {
    if (MongoDBHelper.mongoDBHelper) {
      try {
        await MongoDBHelper.mongoDBHelper.connectDB();
      } catch {
        MongoDBHelper.mongoDBHelper = new MongoDBHelper(config);
        await MongoDBHelper.mongoDBHelper.connectDB();
        return MongoDBHelper.mongoDBHelper;
      }
      return MongoDBHelper.mongoDBHelper;
    }

    MongoDBHelper.mongoDBHelper = new MongoDBHelper(config);
    await MongoDBHelper.mongoDBHelper.connectDB();
    return MongoDBHelper.mongoDBHelper;
  }

  getTimeLastDays(days) {
    var current = new Date().getTime();
    return new Date(current - days * 24 * 60 * 60 * 1000);
  }
  getTimeLastHour(hours) {
    var current = new Date().getTime();
    return new Date(current - hours * 60 * 60 * 1000);
  }
  getTimeLastMinute(minutes) {
    var current = new Date().getTime();
    return new Date(current - minutes * 60 * 1000);
  }

  private async connectDB() {
    if (this.connected === false) {
      try {
        await this.client.connect();
      } catch (error) {
        const message = `Failed to connect to the database`;
        this.logger.debug(error);
        throw new Error(message);
      }
      this.connected = true;
      this.logger?.info("Connected to the database");
    }
  }

  async createIndexForAutoDeleteOldData(totalDays): Promise<string> {
    const aggregationTradesColl = this.client
      .db(this.dbName)
      .collection(aggregationTradesTableName);
    const totalSeconds = totalDays * 24 * 60 * 60;
    try {
      await aggregationTradesColl.dropIndex("tradeTime_-1");
    } catch {}
    return aggregationTradesColl.createIndex(
      { tradeTime: -1 },
      { expireAfterSeconds: totalSeconds }
    );
  }

  insert(body): Promise<InsertManyResult<Document>> {
    const aggregationTradesColl = this.client
      .db(this.dbName)
      .collection(aggregationTradesTableName);
    return aggregationTradesColl.insertMany(body);
  }

  getAggregationTradesByType(type, count) {
    var time = new Date();
    switch (type) {
      case "day":
        time = this.getTimeLastDays(count);
        break;
      case "hour":
        time = this.getTimeLastHour(count);
        break;
      case "min":
        time = this.getTimeLastMinute(count);
        break;
    }
    return this.getAggregationTrades(time);
  }

  getMatchCondition(fromTime?, toTime?) {
    if (fromTime && !toTime) return { $gte: new Date(fromTime) };
    else if (!fromTime && toTime) return { $lte: new Date(toTime) };
    else if (fromTime && toTime)
      return { $gte: new Date(fromTime), $lte: new Date(toTime) };
    return {};
  }

  async getAggregationTrades(fromTime?, toTime?) {
    const aggregationTradesColl = this.client
      .db(this.dbName)
      .collection(aggregationTradesTableName);
    let condition = this.getMatchCondition(fromTime, toTime);  
    return await aggregationTradesColl.find({ eventTime: condition }).toArray();
  }

  async getVolatilityByType(type, count) {
    var time = new Date();
    switch (type) {
      case "day":
        time = this.getTimeLastDays(count);
        break;
      case "hour":
        time = this.getTimeLastHour(count);
        break;
      case "min":
        time = this.getTimeLastMinute(count);
        break;
    }
    return await this.getVolatility(time);
  }
  
  async getVolatility(fromTime?, toTime?) {
    let condition = this.getMatchCondition(fromTime, toTime);
    const pipeline = [
      {
        $match: {
          eventTime: condition,
        },
      },
      {
        $group: {
          _id: "$isBuyerMaker",
          min: {
            $min: {
              $toDouble: "$price",
            },
          },
          max: {
            $max: {
              $toDouble: "$price",
            },
          },
        },
      },
    ];
    const aggregationTradesColl = this.client
      .db(this.dbName)
      .collection(aggregationTradesTableName);
    const aggCursor = await aggregationTradesColl.aggregate(pipeline);
    const results = {
      buy: {
        min: 0,
        max: 0,
      },
      sell: {
        min: 0,
        max: 0,
      },
    };
    for await (const doc of aggCursor) {
      if (doc._id) {
        results.buy.min = doc.min;
        results.buy.max = doc.max;
      } else {
        results.sell.min = doc.min;
        results.sell.max = doc.max;
      }
    }
    return results;
  }
}
