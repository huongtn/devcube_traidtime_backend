import { MongoDBHelper, MongoDBHelperConfig } from "../database/mongodb";
import Config from "../lib/config";

const mongoDBHelperConfig: MongoDBHelperConfig = {
  url: Config.dbUrl,
  dbName: Config.dbName,
};

interface MongoDBHelperCache {
  instance: MongoDBHelper | null;
  promise: Promise<MongoDBHelper> | null;
}

let cached: MongoDBHelperCache = global.mongoDBHelper;

if (!cached) {
  cached = { instance: null, promise: null };
}

export default async function MongoClient(): Promise<MongoDBHelper> {
  if (cached.instance) {
    return cached.instance;
  }

  if (!cached.promise) {
    if (Config.nodeEnv === "development") {
      // In development mode, use a global variable so that the value
      // is preserved across module reloads caused by HMR (Hot Module Replacement).
      if (!global.mongoDBHelper) {
        global.mongoDBHelper = {
          instance: null,
          promise: MongoDBHelper.instance(mongoDBHelperConfig),
        };
      }
      cached = global.mongoDBHelper;
    } else {
      // In production mode, it's best to not use a global variable.
      cached.promise = MongoDBHelper.instance(mongoDBHelperConfig);
    }
  }

  cached.instance = await cached.promise;
  return cached.instance;
}
