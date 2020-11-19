import { Request, Response } from "express";

import { dummyHelperOne, dummyHelperTwo } from "../helpers";

const handleHelloWorld = async (req: Request, res: Response) => {
  try {
    dummyHelperOne();
    dummyHelperTwo();

    res.json({ message: "hello world" });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export default handleHelloWorld;
