import {Router, Request, Response } from "express";
import { auth, createTransaction, deleteTransaction, readTransaction, updateTransaction } from "../controllers/controller";
import { authenticate } from "../middleware/verification";

const router = Router()

// Use this to generate token
router.post("/auth", auth);

// CRUD operation route
router.post("/", authenticate, createTransaction);
router.get("/", authenticate, readTransaction);
router.patch("/", authenticate, updateTransaction);
router.delete("/", authenticate, deleteTransaction);

export default router;