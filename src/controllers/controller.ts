import { Request, Response } from "express";

export const createTransaction = (req: Request, res: Response) => {
  res.send("Create Transaction");
}

export const readTransaction = (req: Request, res: Response) => {
  res.send("get Transaction");
}

export const updateTransaction = (req: Request, res: Response) => {
  res.send("update Transaction");
};

export const deleteTransaction = (req: Request, res: Response) => {
  res.send("delete Transaction");
};
