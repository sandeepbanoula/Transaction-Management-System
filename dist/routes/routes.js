"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../controllers/controller");
const verification_1 = require("../middleware/verification");
const router = (0, express_1.Router)();
// Use this to generate token
router.post("/auth", controller_1.auth);
// CRUD operation route
router.post("/", verification_1.authenticate, controller_1.createTransaction);
router.get("/", verification_1.authenticate, controller_1.readTransaction);
router.patch("/", verification_1.authenticate, controller_1.updateTransaction);
router.delete("/", verification_1.authenticate, controller_1.deleteTransaction);
exports.default = router;
