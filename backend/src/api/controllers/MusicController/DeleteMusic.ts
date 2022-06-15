import { Request, Response } from "express";
import { deleteMusicService } from "../../../services/MusicServices";

export class DeleteMusic{
    handle(req: Request, res: Response){
        const {musicId} = req.params;

        deleteMusicService.execute(musicId)
        .then(musicDeleted=>{
            return res.json(musicDeleted)
        })
    }
}