import {Router, Request, Response } from "express";
import { createTransaction, deleteTransaction, readTransaction, updateTransaction } from "../controllers/controller";

const router = Router()

router.get("/", readTransaction);
router.post("/", createTransaction);
router.patch("/", updateTransaction);
router.delete("/", deleteTransaction);

export default router;