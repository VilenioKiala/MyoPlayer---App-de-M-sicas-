import { Request, Response } from "express";
import { User } from "../../../database/entities/user.entity";

export class ShowOneUser{
    handle(req: Request & {user: User}, res: Response){
        return res.json(req.user)
    }   
}