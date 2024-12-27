import { Request, Response, NextFunction } from "express";
var jwt = require("jsonwebtoken");

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const auth = req.headers.authorization;
    if (!auth) {
      res.status(401).json({ message: "No authorization token provided!" });
    } else {
      const payload = await jwt.verify(auth, process.env.JWT_SECRET_KEY);
      next();
    }
  } catch (err) {
    res.status(403).json({ message: "Token invalid!!" });
  }
};
