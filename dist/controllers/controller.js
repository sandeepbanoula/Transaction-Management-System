"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTransaction = exports.updateTransaction = exports.readTransaction = exports.createTransaction = void 0;
const createTransaction = (req, res) => {
    res.send("Create Transaction");
};
exports.createTransaction = createTransaction;
const readTransaction = (req, res) => {
    res.send("get Transaction");
};
exports.readTransaction = readTransaction;
const updateTransaction = (req, res) => {
    res.send("update Transaction");
};
exports.updateTransaction = updateTransaction;
const deleteTransaction = (req, res) => {
    res.send("delete Transaction");
};
exports.deleteTransaction = deleteTransaction;
