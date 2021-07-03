import { Request, Response } from "express";
import { errorLogger } from "../helpers";

const handleHealth = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    return res.status(200).send({ message: "Health OK" });
  } catch (error) {
    errorLogger(
      "controllers/handleHealth",
      "handleHealth",
      error
    );
    return res.status(400).json({ message: error.message });
  }
};

export default handleHealth;
