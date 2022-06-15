import { Request, Response } from "express";
import { listAllMusicsService } from "../../../services/MusicServices";

export class ListMusics{
    handle(req: Request,res: Response){
        listAllMusicsService.execute()
        .then(musics=>{
            return res.json(musics)
        })
        .catch(error=>{
            return res.status(400).json(error)
        })
    }
}