import { Request, Response } from "express";

const handleHelloGermany = async (req: Request, res: Response) => {
  console.log('hemin')
  try {
    res.json({ message: "hello germany" });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export default handleHelloGermany;
