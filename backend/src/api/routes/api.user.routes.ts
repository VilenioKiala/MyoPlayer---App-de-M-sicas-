import express from "express"
import { createUser, deleteUser, listUser, showOneUser, updateUser } from "../controllers/UserController"
import { authMiddlewares, userMiddlewares } from "../middlewares"


const userRouter = express.Router()
userRouter.get("/", listUser.handle)
userRouter.post("/", createUser.handle)
userRouter.get("/:userId", showOneUser.handle)
userRouter.put("/:userId", updateUser.handle)
userRouter.delete("/:userId", deleteUser.handle)

userRouter.param("userId",authMiddlewares.requireJWT)
userRouter.param("userId",authMiddlewares.isAuthorized)
userRouter.param("userId",userMiddlewares.findUserById)


export {userRouter}