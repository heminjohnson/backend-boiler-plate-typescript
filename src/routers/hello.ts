import { Router } from "express";

import { handleHelloWorld, handleHelloGermany } from "../controllers";

const helloRouter = Router();

helloRouter.get("/hello", handleHelloWorld);

helloRouter.get("/germany", handleHelloGermany);

export default helloRouter;
