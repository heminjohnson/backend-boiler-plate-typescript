import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import dummyMiddleware from "./dummyMiddleware";

const middlewares = [express.json(), cors(), helmet(), morgan('tiny'), dummyMiddleware];

export default middlewares;
