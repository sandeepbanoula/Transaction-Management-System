import { Request, Response, NextFunction } from "express";
var jwt = require("jsonwebtoken");

// Middleware to validate request
export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const auth = req.headers.authorization;
    if (!auth) {
      res.status(401).json({ message: "No authorization token provided!" });
    } else if (!auth.startsWith("Bearer")) {
      res.status(401).json({ message: "Please provide Bearer Token!" });
    } else {
      const payload = await jwt.verify(auth.split(" ")[1], process.env.JWT_SECRET_KEY);
      next();
    }
  } catch (err) {
    res.status(403).json({ message: "Token invalid!!" });
  }
};
