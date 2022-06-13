import { Request, Response } from 'express';
import { createUserService } from '../../../services/UserServices';

export class CreateUser{
    handle(req: Request, res: Response){
        const {first_name,last_name,username, password} = req.body;

        createUserService.execute({
            firstName: first_name,
            lastName:last_name,
            username: username,
            password: password,
        })
        .then(userCreated =>{
            return res.status(200).json(userCreated)
        })
        .catch(error=>{
            return res.status(400).json({error})
        })
    }
}