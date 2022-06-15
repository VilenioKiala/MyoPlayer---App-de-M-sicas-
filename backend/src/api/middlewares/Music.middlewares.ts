import { Request, Response } from "express";
import { musicRepository } from '../../database/repositories';

export class MusicMiddlewares{
    findMusicById(req: Request,res: Response,next: Function){
        const {musicId} = req.params

        musicRepository.findOneById(musicId)
        .then(music=>{
            if(!music){
                return res.status(404).json({
                    error: "Music Not Found!"
                })
            }
            return next()
        })
        .catch(error=>{
            return res.status(400).json({error: error.message})
        })
    }
}