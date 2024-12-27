require("dotenv").config();
import express from "express";
import router from "./routes/routes";
import mongoose from "mongoose";

const app = express();
const port: number = Number(process.env.PORT) || 3000;

app.use(express.json());
app.use(router); // use routes

// Connect ro MongoDB database
mongoose
  .connect(String(process.env.MONGO_DB_URI))
  .then(() => {
    console.log("Connected to db.");
    // Start Server
    app.listen(port, () => {
      console.log(`Server is up and running at port ${port}`);
    });
  })
  .catch((err) => console.log(err));
