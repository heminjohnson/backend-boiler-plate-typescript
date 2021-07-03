import { config } from "dotenv";
config();

import express from "express";
import middlewares from "./middlewares";
import routers from "./routers";

const app = express();

app.use(middlewares);
app.use(routers);

export default app;
