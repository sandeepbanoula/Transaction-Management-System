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
const port = Number(process.env.PORT) || 3000;
app.use(routes_1.default);
mongoose_1.default
    .connect(String(process.env.MONGO_DB_URI))
    .then(() => {
    console.log("Connected to db.");
    app.listen(port, () => {
        console.log(`Server is up and running at port ${port}`);
    });
})
    .catch((err) => console.log(err));
