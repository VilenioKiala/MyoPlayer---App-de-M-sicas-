import { Request, Response } from 'express';
import { createUserService } from '../../../services/UserServices';
import {ValidationError} from 'class-validator'
import { createMusicService } from '../../../services/MusicServices';
import { User } from '../../../database/entities/user.entity';

export class CreateMusic{
    handle(req: Express.Request & Request & {user: User}, res: Response){
        const {titulo} = req.body;
        const cover: Express.Multer.File = req.files["cover"][0];
        const music: Express.Multer.File = req.files["music"][0];
        const autor = req.user;


        createMusicService.execute({
            cover: cover.filename,
            music: music.filename,
            titulo,
            autor,
        })
        .then(musicCreated =>{
            return res.status(200).json(musicCreated)
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