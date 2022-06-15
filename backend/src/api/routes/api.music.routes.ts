import express, { NextFunction, Request, Response } from "express"
import { MulterError } from "multer"
import { uploadMusic } from "../../services/MusicServices/UploadMusic"
import { createMusic, deleteMusic, listMusics, showOneMusic, updateMusic } from "../controllers/MusicController"
import { authMiddlewares, musicMiddlewares } from "../middlewares"

const musicRouter = express.Router()

musicRouter.get("/", listMusics.handle)
musicRouter.post("/", authMiddlewares.requireJWT,authMiddlewares.isAuthorized, 
    uploadMusic.fields([{name: "music",maxCount: 1},{name: "cover",maxCount: 1}]),
    (error, req: Request & {music: Express.Multer.File},res: Response,next: NextFunction)=>{
        if(error instanceof MulterError){
            return res.status(400).json({
                field: Object.values(req.files)[0][0].fieldname,
                error: error.code == "LIMIT_FILE_SIZE" ? "Ficheiro demasiado grande!" : error.message,
            })
        }

        if(error instanceof Error){
            return res.status(400).json({
                field: "music",
                error: error.message,
            })
        }

        next()
    },  
    createMusic.handle)

musicRouter.get("/:musicId",showOneMusic.handle)
musicRouter.put("/:musicId",
    authMiddlewares.requireJWT,
    authMiddlewares.isAuthorized,
    uploadMusic.fields([{name: "cover",maxCount: 1}]),
    (error, req: Request & {music: Express.Multer.File},res: Response,next: NextFunction)=>{
        if(error instanceof MulterError){
            return res.status(400).json({
                field: Object.values(req.files)[0][0].fieldname,
                error: error.code == "LIMIT_FILE_SIZE" ? "Ficheiro demasiado grande!" : error.message,
            })
        }

        if(error instanceof Error){
            return res.status(400).json({
                field: "music",
                error: error.message,
            })
        }

        next()
    },  
    updateMusic.handle
)
musicRouter.delete("/:musicId", authMiddlewares.requireJWT,authMiddlewares.isAuthorized, deleteMusic.handle)
musicRouter.param("musicId",musicMiddlewares.findMusicById)

export {musicRouter};
