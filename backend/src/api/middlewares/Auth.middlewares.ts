import { NextFunction, Response } from 'express'
import {expressjwt, Request} from 'express-jwt'
import {  } from "jsonwebtoken"
import { User } from '../../database/entities/user.entity'
import { userRepository } from '../../database/repositories'

export class AuthMiddlewares{
    requireJWT=expressjwt({
        secret: "mysecret",
        algorithms:["HS256"],
    })

    isAuthorized(req: Request & {user: User} , res: Response, next: NextFunction){
        const {userId} = req.params
        const tokenPayload = String(req.auth);
        if(userId && userId !== tokenPayload){
            return res.status(401).json("Unauthorized!")
        }


        userRepository.findOneById(tokenPayload).then(user=>{
            req.user = user;

            return next()
        })
    }
}