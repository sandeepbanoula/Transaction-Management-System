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
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
var jwt = require("jsonwebtoken");
// Middleware to validate request
const authenticate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const auth = req.headers.authorization;
        if (!auth) {
            res.status(401).json({ message: "No authorization token provided!" });
        }
        else if (!auth.startsWith("Bearer")) {
            res.status(401).json({ message: "Please provide Bearer Token!" });
        }
        else {
            const payload = yield jwt.verify(auth.split(" ")[1], process.env.JWT_SECRET_KEY);
            next();
        }
    }
    catch (err) {
        res.status(403).json({ message: "Token invalid!!" });
    }
});
exports.authenticate = authenticate;
