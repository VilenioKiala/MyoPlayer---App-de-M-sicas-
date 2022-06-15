import { ValidationError } from 'class-validator';
import { Request, Response } from "express";
import { User } from '../../../database/entities/user.entity';
import { updateMusicService } from '../../../services/MusicServices';

export class UpdateMusic{
    handle(req: Express.Request & Request & {user: User},res: Response){
        const {musicId} = req.params;
        const {titulo} = req.body;
        const cover = req.file["cover"][0];

        updateMusicService.execute(musicId,{
            titulo: titulo?.trim(),
            cover: cover?.filename,
        })
        .then(musicUpdated=>{
            return res.json(musicUpdated)
        })
        .catch(error=>{
            if(error[0] instanceof ValidationError){
                return res.status(400).json({
                    field: error[0].property,
                    error: Object.values(error[0].constraints)[0]
                })
            }

            return res.status(400).json({error: error.message})
        })

    }
}