"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const transactionSchema = new mongoose_1.default.Schema({
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
mongoose_1.default.model("Transaction", transactionSchema);
