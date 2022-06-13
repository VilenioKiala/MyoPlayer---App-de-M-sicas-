import express from "express"
import { createUser, deleteUser, listUser, showOneUser, updateUser } from "../controllers/UserController"


const userRouter = express.Router()
userRouter.get("/", listUser.handle)
userRouter.post("/", createUser.handle)
userRouter.get("/:userId", showOneUser.handle)
userRouter.put("/:userId", updateUser.handle)
userRouter.delete("/:userId", deleteUser.handle)


export {userRouter}