import {Router, Request, Response } from "express";
import { createTransaction, deleteTransaction, readTransaction, updateTransaction } from "../controllers/controller";

const router = Router()

router.post("/", createTransaction);
router.get("/", readTransaction);
router.patch("/", updateTransaction);
router.delete("/", deleteTransaction);

export default router;