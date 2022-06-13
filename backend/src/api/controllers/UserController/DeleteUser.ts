import { Request, Response } from "express";
import { deleteUserService } from "../../../services/UserServices";

export class DeleteUser{
    handle(req: Request, res: Response){
        const {userId} = req.params;

        deleteUserService.execute(userId)
        .then(userDeleted=>{
            return res.json(userDeleted)
        })
    }
}