"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes/routes"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(routes_1.default); // use routes
// Connect to MongoDB database
mongoose_1.default
    .connect(String(process.env.MONGO_DB_URI))
    .then(() => {
    console.log("Connected to db.");
})
    .catch((err) => console.log(err));
exports.default = app;
