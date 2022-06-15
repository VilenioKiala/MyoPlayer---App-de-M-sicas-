import { Request } from 'express'
import multer from 'multer'
import { multerConfig } from '../../config/multer'
import path from 'path'

const musicStorage = multer.diskStorage({
    destination: function(req: Request, file: Express.Multer.File, cb){
        cb(null, `${multerConfig.destination}/${file.fieldname == "cover" ? "covers" : "musics"}`)
    },
    filename: function(req: Request,file: Express.Multer.File,cb: (error: Error, filename: string)=>void){
        cb(null,multerConfig.filename())
    }
})

const uploadMusic = multer({
    storage: musicStorage,
    fileFilter: function (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback){
        const coverMimetypesAllowed = ["image/jpeg","image/png"]
        const musicMimetypesAllowed = ["audio/mpeg"]

        if(file.fieldname == "music"){
            if(musicMimetypesAllowed.indexOf(file.mimetype)== -1){
                cb(new Error("A música contém um formato inválido! Deve fornecer um arquivo em mp3!"))
            }
            
        }

        if(file.fieldname == "cover"){
            if(coverMimetypesAllowed.indexOf(file.mimetype)== -1){
                cb(new Error("A capa da música não é uma imagem válida. Deve fornecer imagens em jpg ou png!"))
            }
        }

        cb(null,true)
    },
    limits:{
        fileSize: multerConfig.fileSizeLimit
    }
})

export {uploadMusic}