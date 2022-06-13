import { Request, Response } from "express";
import { updateUserService } from "../../../services/UserServices";

export class UpdateUser{
    handle(req: Request,res: Response){
        const {firstName,lastName,username,password} = req.body;
        const {userId} = req.params

        updateUserService.execute(userId,{firstName,lastName,username,password})
        .then(userUpdated=>{
            return res.json(userUpdated)
        })

    }
}