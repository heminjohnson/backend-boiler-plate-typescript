import express from "express";
import cors from "cors";
import helmet from "helmet";
import dummyMiddleware from "./dummyMiddleware";

const middlewares = [express.json(), cors(), helmet(), dummyMiddleware];

export default middlewares;
