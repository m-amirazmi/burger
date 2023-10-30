// pages/api/burgers/[id].ts
import { BurgerModel } from "@/models";
import type { NextApiRequest, NextApiResponse } from "next";
import { dbConn } from "@/utils/dbconn";
import { Burger } from "@/models/burger";
type UpdateBurgerBody = Partial<Burger>;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // first connect to the database
  await dbConn();
  const id = req.query.id as string;
  if (req.method === "GET") {
    // for retrieving a single burger
    const burger = await BurgerModel.findById(id);
    if (burger) {
      res.status(200).json(burger);
    } else {
      res.status(404);
    }
  } else if (req.method === "PUT") {
    // updating a single burger
    const body = req.body as UpdateBurgerBody;
    const burger = await BurgerModel.findById(id);
    if (burger) {
      burger.set({ ...body });
      await burger.save();
      res.status(200).json(burger.toJSON());
    } else {
      res.status(404);
    }
  } else if (req.method === "DELETE") {
    // deleting a single burger
    const burger = await BurgerModel.findByIdAndRemove(id);
    if (burger) {
      res.status(200).json(burger.toJSON());
    } else {
      res.status(404);
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

const read = () => {};
const update = () => {};
const remove = () => {};
