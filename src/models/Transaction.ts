import mongoose from "mongoose";

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
//   created: {
//     type: Date,
//     default: Date.now,
//     required: true,
//     immutable: true,
//   },
//   updated: {
//     type: Date,
//     default: Date.now,
//     required: true,
//   },
}, {
    timestamps: true
});

export const Transaction = mongoose.model("Transaction", transactionSchema);
