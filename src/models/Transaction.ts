import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  transactionType: {
    type: String,
    require: true,
    uppercase: true,
    enum: ["CREDIT", "DEBIT"],
  },
  amount: {
    type: Number,
    require: true,
    min: 0,
  },
  created: {
    type: Date,
    default: Date.now,
    immutable: true,
  },
  updated: {
    type: Date,
    default: Date.now,
  },
});

mongoose.model("Transaction", transactionSchema);
