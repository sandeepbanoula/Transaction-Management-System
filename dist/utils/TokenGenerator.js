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
var jwt = require("jsonwebtoken");
const tokenGenerator = (username) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = {
        iat: Math.floor(Date.now() / 1000) - 30,
        user: username,
    };
    var token = yield jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });
    return token;
});
exports.default = tokenGenerator;