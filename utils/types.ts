import { NextApiRequest, NextApiResponse } from "next";
import { ChangeEvent, ReactNode } from "react";
import { IconType } from "react-icons";

export interface ILayout {
  children: ReactNode;
}

export interface ISideNav {
  id: string;
  name: string;
  path: string;
  icon: IconType;
}

export interface IBreadcrumbs {
  navigations: {
    name: string;
    current: boolean;
    path: string;
  }[];
}

export interface IPageTitle {
  breadcrumbs: {
    name: string;
    current: boolean;
    path: string;
  }[];
  name: string;
}

export interface IBurgerItem {
  no?: number;
  _id: string;
  name: string;
  description: string;
  noOfStallUsed: number;
}

export interface IBurgerList {
  list: IBurgerItem[];
}

export interface IBurgerModel {
  _id?: string;
  name: string;
  description: string;
  slug?: string;
  noOfStallUsed?: number;
}

export interface IBurgerUpdate {
  handleInput: ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: () => void;
  handleToggle: () => void;
}

export interface IReqController {
  [key: string]: (req: NextApiRequest, res: NextApiResponse) => Promise<void>;
}
