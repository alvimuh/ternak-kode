import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../utils/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method !== "POST") return;

  const { title, type, link, categories, tags } = req.body;

  if (!title || !type || !link || !categories || !tags) return;

  const client = await clientPromise;
  const db = client.db("ternakkode");
  const collection = db.collection("resources");

  const result = await collection.insertOne({
    title,
    type,
    link,
    categories,
    tags,
  });

  res.status(201).json({
    data: result,
    message: "Resource created",
  });
}
