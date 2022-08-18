import clientPromise from "../../utils/mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = await clientPromise;
  const db = client.db("ternakkode");

  const data = await db
    .collection("resources")
    .find({})
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();

  res.json(data);
}
