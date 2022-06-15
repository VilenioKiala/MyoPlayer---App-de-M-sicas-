import { ValidationError } from 'class-validator';
import { Request, Response } from "express";
import { updateUserService } from "../../../services/UserServices";

export class UpdateUser{
    handle(req: Request,res: Response){
        const {first_name,last_name,username,password} = req.body;
        const {userId} = req.params

        updateUserService.execute(userId,{
            firstName: first_name?.trim(),
            lastName: last_name?.trim(),
            username: username?.trim(),
            password: password,
        })
        .then(userUpdated=>{
            return res.json(userUpdated)
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