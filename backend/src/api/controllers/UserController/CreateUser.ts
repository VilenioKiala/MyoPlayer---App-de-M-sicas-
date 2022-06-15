import { Request, Response } from 'express';
import { createUserService } from '../../../services/UserServices';
import {ValidationError} from 'class-validator'

export class CreateUser{
    handle(req: Request, res: Response){
        const {first_name,last_name,username, password} = req.body;

        createUserService.execute({
            firstName: first_name?.trim(),
            lastName:last_name?.trim(),
            username: username?.trim(),
            password: password,
        })
        .then(userCreated =>{
            return res.status(200).json(userCreated)
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