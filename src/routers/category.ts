import { Router } from "express";

import { handleCategory } from "../controllers";

const categoryRouter = Router();

categoryRouter.get("/categories", handleCategory);

export default categoryRouter;
