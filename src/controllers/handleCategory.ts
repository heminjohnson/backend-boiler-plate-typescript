import { Request, Response } from "express";
import { errorLogger } from "../helpers";
import { getRepository } from "typeorm";
import { Category } from "../entity/Category";

const handleCategory = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const categoryRepository = await getRepository(Category);
    const categories = await categoryRepository.find();
    return res.status(200).send({ data: categories });
  } catch (error) {
    errorLogger("controllers/handleCategory", "handleCategory", error);
    return res.status(400).json({ message: error.message });
  }
};

export default handleCategory;
