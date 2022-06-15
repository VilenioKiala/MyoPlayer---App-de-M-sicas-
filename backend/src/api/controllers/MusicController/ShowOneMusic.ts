import { Request, Response } from "express";
import { User } from "../../../database/entities/user.entity";
import { showOneMusicService } from "../../../services/MusicServices";

export class ShowOneMusic{
    handle(req: Request & {user: User}, res: Response){
        const {musicId} = req.params;

        showOneMusicService.execute(musicId)
        .then(music=>{
            return res.json(music)
        })
        .catch(error=>{
            return res.status(400).json({
                error
            })
        })
    }
}