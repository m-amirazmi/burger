// pages/api/burgers/index.ts
import { BurgerModel } from "@/models";
import { dbConn } from "@/utils/dbconn";
import { IBurgerModel } from "@/utils/types";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConn();
  if (req.method === "GET") {
    // for retrieving burgers list
    const burgers = await BurgerModel.find({}).lean();
    res.status(200).json(burgers);
  } else if (req.method === "POST") {
    // creating a single burger
    const body = req.body as IBurgerModel;

    body.slug = body.name.toLowerCase().replace(" ", "_");

    const burger = new BurgerModel(body);
    await burger.save();

    res.status(200).json(burger.toJSON());
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
