import express from "express"
import cors from "cors"
import morgan from "morgan"
import helmet from "helmet"
import dummyMiddleware from './dummyMiddleware'

const middlewares =  [express.json(), cors(), morgan("common"), helmet(), dummyMiddleware]

export default middlewares
