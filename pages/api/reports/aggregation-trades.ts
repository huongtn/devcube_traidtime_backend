import { NextApiRequest, NextApiResponse } from "next";
import { fileURLToPath } from "url";
import { AggTrades } from "../../../lib/trades";

export default async function aggregationTrades(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const aggTrades = await AggTrades.instance();

  const httpMethod = req.method.toUpperCase();
  switch (httpMethod) {
    case "GET":
      const { from: fromArr, to: toArr } = req.query;
      const from = typeof fromArr === "string" ? fromArr : fromArr[0];
      const to = typeof toArr === "string" ? toArr : toArr[0]; 
      const data = await aggTrades.getReport(from, to);
      res.status(200).json(data);
      break;

    // case "POST":
    //   const insertedData = await mongoClient.insert(req.body);
    //   res.status(200).json(insertedData);
    //   break;

    default:
      res.status(404).end();
  }
}
