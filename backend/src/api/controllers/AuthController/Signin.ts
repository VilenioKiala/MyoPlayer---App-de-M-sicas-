import { Request, Response } from "express"
import { signInService } from "../../../services/AuthServices"

export class SignIn{
    handle(req: Request, res: Response){
        signInService.execute(req.body)
        .then(user=>{
            return res.json(user)
        })
        .catch(error=>{
            return res.status(400).json({
                error: error.message
            })
        })
    }
}