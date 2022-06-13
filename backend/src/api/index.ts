import express from 'express'
import { authRouter } from './routes/api.auth.routes'
import { userRouter } from './routes/api.user.routes'


const apiRouter = express.Router()
apiRouter.use("/users",userRouter)
apiRouter.use(authRouter)


export {apiRouter}