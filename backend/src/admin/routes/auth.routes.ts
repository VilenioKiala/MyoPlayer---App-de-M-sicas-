import express from 'express'

const authRouter = express.Router();

authRouter.get("/login",(req,res)=>{
    return res.render("login")
})

export {authRouter}