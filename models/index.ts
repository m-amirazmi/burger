import { Burger } from "@/models/burger";
import { getModelForClass } from "@typegoose/typegoose";

export const BurgerModel = getModelForClass(Burger);
