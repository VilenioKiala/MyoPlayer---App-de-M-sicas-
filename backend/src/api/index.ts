import { ValidationError } from 'class-validator'
import express, { NextFunction, Request, Response } from 'express'
import { authRouter } from './routes/api.auth.routes'
import { musicRouter } from './routes/api.music.routes'
import { userRouter } from './routes/api.user.routes'


const apiRouter = express.Router()
apiRouter.use("/users",userRouter)
apiRouter.use("/musics",musicRouter)
apiRouter.use(authRouter)


export {apiRouter}