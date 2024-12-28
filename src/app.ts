require("dotenv").config();
import express from "express";
import router from "./routes/routes";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(router); // use routes

// Connect to MongoDB database
mongoose
  .connect(String(process.env.MONGO_DB_URI))
  .then(() => {
    console.log("Connected to db.");
  })
  .catch((err) => console.log(err));

export default app;