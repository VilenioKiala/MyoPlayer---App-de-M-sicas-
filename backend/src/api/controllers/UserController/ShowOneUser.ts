import { Request, Response } from "express";
import { showOneUserService } from "../../../services/UserServices";

export class ShowOneUser{
    handle(req:Request, res: Response){
        const {userId} = req.params
        showOneUserService.execute(userId)
        .then(user=>{
            return res.json(user)
        })
    }   
}