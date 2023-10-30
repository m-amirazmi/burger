import { prop } from "@typegoose/typegoose";
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { nanoid } from "nanoid";

export class Burger extends TimeStamps {
  @prop({ default: () => nanoid(9) })
  _id: string;

  @prop({ required: true, unique: true })
  name: string;

  @prop({ required: true })
  description: string;

  @prop({ required: false, default: 0 })
  noOfStallUsed: number;

  @prop({ required: false, unique: true })
  slug: string;
}
