import { Router } from "express";

import { handleHealth } from "../controllers";

const healthRouter = Router();

healthRouter.get("/health", handleHealth);

export default healthRouter;
