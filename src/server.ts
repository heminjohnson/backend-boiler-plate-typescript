import { config } from "dotenv";
config();

import express from "express";
import middlewares from "./middlewares";

import { helloRouter } from "./routers";

const app = express();

app.use(middlewares);

app.use(helloRouter);

export default app;
