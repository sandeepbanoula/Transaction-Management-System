import mongoose from "mongoose";


// Transaction Schema for MongoDB
const transactionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  transactionType: {
    type: String,
    required: true,
    uppercase: true,
    enum: ["CREDIT", "DEBIT"],
  },
  amount: {
    type: Number,
    required: true,
    min: 0,
  },
}, {
    timestamps: true
});

export const Transaction = mongoose.model("Transaction", transactionSchema);
