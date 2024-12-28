import { Request, Response } from "express";
import { Transaction } from "../models/Transaction";
import tokenGenerator from "../utils/TokenGenerator";


// The authentication token generater controller
export const auth = async (req: Request, res: Response) => {
  try {
    const user = req.body.username;
    const pass = req.body.password;
    if (!user || !pass) {
      res.status(400).json({ message: "Please provide username and password!" });
    } else {
      const token = await tokenGenerator(user, pass);
      res.status(201).json({ AuthenticationToken: token });
    }
  } catch {
    res.status(500).json({ message: "Cannot generate error!" });
  }
};

// Controller to create transaction
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

// Controller to read one or all transactions
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

// Controller to update transaction
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


// Controller to delete transaction
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