"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const transactionSchema = new mongoose_1.default.Schema({
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
exports.Transaction = mongoose_1.default.model("Transaction", transactionSchema);
