
if (!process.env.MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}

const Config = {
  nodeEnv: process.env.NODE_ENV,
  dbUrl: process.env.MONGODB_URI,
  dbName: process.env.MONGODB_NAME || undefined,
};

export default Config;
