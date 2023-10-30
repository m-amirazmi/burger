import { BurgerModel } from "@/models";
import { dbConn } from "@/utils/dbconn";
import { toSlug } from "@/utils/helpers";
import { IBurgerModel, IReqController } from "@/utils/types";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConn();

  if (!req.method) return res.status(405).json({ error: "Method not allowed" });

  const getController = reqController[req.method];

  if (!getController)
    return res.status(405).json({ error: "Method not allowed" });

  return await reqController[req.method](req, res);
}

const create = async (req: NextApiRequest, res: NextApiResponse) => {
  const body: IBurgerModel[] = req.body;

  const newBody = body.map((i) => {
    const newObj = { ...i };
    newObj.slug = toSlug(newObj.name);
    return new BurgerModel(newObj);
  });

  const burgers = await BurgerModel.bulkSave(newBody);
  res.status(200).json(burgers);
};

const reqController: IReqController = {
  POST: create,
};
