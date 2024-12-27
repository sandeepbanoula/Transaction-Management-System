import { Request, Response } from "express";
import { Transaction } from "../models/Transaction";

export const createTransaction = async (req: Request, res: Response) => {
  try {
    const transactionName: String = req.body.name;
    const transactionType: String = req.body.type.toUpperCase();
    const transactionAmount: Number = req.body.amount;

    const transaction = new Transaction({
      name: transactionName,
      transactionType: transactionType,
      amount: transactionAmount,
    });

    await transaction.save();
    res.status(201).json(transaction);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

export const readTransaction = async (req: Request, res: Response) => {
  try {
    var transaction;
    const transactionId = req.query.id;
    if (req.query.id) {
      transaction = await Transaction.findById(transactionId);
    } else {
      transaction = await Transaction.find();
    }
    if (transaction) res.status(200).json(transaction);
    // no content found
    else res.status(404).json({ message: "No transaction found!" });
  } catch (err) {
    res.status(502).json({ message: err.message });
  }
};

export const updateTransaction = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    if (!data["id"]) {
      res.status(400).json({ message: "No transaction id provided!" });
    } else {
      const transaction = await Transaction.findByIdAndUpdate(data["id"], data, { returnDocument: "after" });
      if (transaction) res.status(200).json(transaction);
      else res.status(404).json({ message: "No transaction found!" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteTransaction = async (req: Request, res: Response) => {
  try {
    const transactionId = req.body.id;
    if (!transactionId) {
      res.status(400).json({ message: "No transaction id provided!" });
    } else {
      const transaction = await Transaction.findByIdAndDelete(transactionId);
      if (transaction) res.status(200).json(transaction);
      // no content found
      else res.status(404).json({ message: "No transaction found!" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
