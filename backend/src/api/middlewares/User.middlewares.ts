import { Request, Response } from "express";
import { userRepository } from '../../database/repositories';

export class UserMiddlewares{
    findUserById(req: Request,res: Response,next: Function){
        const {userId} = req.params

        userRepository.findOneById(userId)
        .then(user=>{
            if(!user){
                return res.status(404).json({
                    error: "User Not Found!"
                })
            }
            return next()
        })
        .catch(error=>{
            return res.status(400).json({error: error.message})
        })
    }
}