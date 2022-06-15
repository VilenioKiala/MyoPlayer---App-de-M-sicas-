import { AuthMiddlewares } from './Auth.middlewares';
import { UserMiddlewares } from "./User.middlewares";
import { MusicMiddlewares } from './Music.middlewares'

const userMiddlewares = new UserMiddlewares()
const musicMiddlewares = new MusicMiddlewares()
const authMiddlewares = new AuthMiddlewares()

export { userMiddlewares, authMiddlewares,musicMiddlewares }