import { Request, Response, NextFunction } from "express";

const dummyMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("--- DUMMY MIDDLEWARE TRIGGERED ---");
  next();
};

export default dummyMiddleware;
