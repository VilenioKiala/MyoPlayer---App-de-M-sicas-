import express from 'express'
import { signIn } from '../controllers/AuthController'

const authRouter = express.Router()
authRouter.post("/login",signIn.handle)

export {authRouter}