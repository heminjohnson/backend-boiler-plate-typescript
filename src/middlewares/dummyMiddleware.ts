import { Request, Response, NextFunction } from "express";

const dummyMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  next();
};

export default dummyMiddleware;
