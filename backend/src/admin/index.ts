import express from 'express'
import path from 'path'
import { authRouter } from './routes/auth.routes'
import { userRouter } from './routes/user.routes'


const adminRouter = express.Router()
adminRouter.use(express.static(path.join(__dirname,"views","public")))
adminRouter.use("/users/",userRouter)
adminRouter.use(authRouter)

adminRouter.get("/",(req,res)=>{
    return res.render("index");
})


export {adminRouter};