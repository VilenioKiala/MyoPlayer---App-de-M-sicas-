import { Request, Response } from "express";
import { listAllUsersService } from "../../../services/UserServices";

export class ListUser{
    handle(req: Request,res: Response){
        listAllUsersService.execute()
        .then(users=>{
            return res.json(users)
        })
        .catch(error=>{
            return res.status(400).json(error)
        })
    }
}