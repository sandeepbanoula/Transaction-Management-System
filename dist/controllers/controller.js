"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTransaction = exports.updateTransaction = exports.readTransaction = exports.createTransaction = exports.auth = void 0;
const Transaction_1 = require("../models/Transaction");
const TokenGenerator_1 = __importDefault(require("../utils/TokenGenerator"));
// The authentication token generater controller
const auth = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body.username;
        const pass = req.body.password;
        if (!user || !pass) {
            res.status(400).json({ message: "Please provide username and password!" });
        }
        else {
            const token = yield (0, TokenGenerator_1.default)(user, pass);
            res.status(201).json({ AuthenticationToken: token });
        }
    }
    catch (_a) {
        res.status(500).json({ message: "Cannot generate error!" });
    }
});
exports.auth = auth;
// Controller to create transaction
const createTransaction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const transactionName = req.body.name;
        const transactionType = req.body.type.toUpperCase();
        const transactionAmount = req.body.amount;
        const transaction = new Transaction_1.Transaction({
            name: transactionName,
            transactionType: transactionType,
            amount: transactionAmount,
        });
        yield transaction.save();
        res.status(201).json(transaction);
    }
    catch (err) {
        console.log(err);
        res.status(400).json({ message: err.message });
    }
});
exports.createTransaction = createTransaction;
// Controller to read one or all transactions
const readTransaction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var transaction;
        const transactionId = req.query.id;
        if (req.query.id) {
            transaction = yield Transaction_1.Transaction.findById(transactionId);
        }
        else {
            transaction = yield Transaction_1.Transaction.find();
        }
        if (transaction)
            res.status(200).json(transaction);
        // no content found
        else
            res.status(404).json({ message: "No transaction found!" });
    }
    catch (err) {
        res.status(502).json({ message: err.message });
    }
});
exports.readTransaction = readTransaction;
// Controller to update transaction
const updateTransaction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        if (!data["id"]) {
            res.status(400).json({ message: "No transaction id provided!" });
        }
        else {
            const transaction = yield Transaction_1.Transaction.findByIdAndUpdate(data["id"], data, { returnDocument: "after" });
            if (transaction)
                res.status(200).json(transaction);
            else
                res.status(404).json({ message: "No transaction found!" });
        }
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
exports.updateTransaction = updateTransaction;
// Controller to delete transaction
const deleteTransaction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const transactionId = req.body.id;
        if (!transactionId) {
            res.status(400).json({ message: "No transaction id provided!" });
        }
        else {
            const transaction = yield Transaction_1.Transaction.findByIdAndDelete(transactionId);
            if (transaction)
                res.status(200).json(transaction);
            // no content found
            else
                res.status(404).json({ message: "No transaction found!" });
        }
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
exports.deleteTransaction = deleteTransaction;
