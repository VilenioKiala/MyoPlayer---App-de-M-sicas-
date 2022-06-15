import { User } from '../../database/entities/user.entity';
import { IUserRepository } from '../../database/repositories/Users/IUserRepository';
import jwt from 'jsonwebtoken'

interface IRequest{
    username:string,
    password: string,
}


export class SignInService{
    constructor(private userRepository: IUserRepository){}

    async execute({username,password}: IRequest){
        const user = await this.userRepository.findOneByUsername(username)
        
        if(!user){
            throw new Error("Não existe nenhum usuário com esse nome de usuário!!")
        }
        
        if(!user.comparePassword(password)){    
            throw new Error("Nome de usuário e palavra-passe não coincidem!")
        }
        
        user.password = undefined;
        
        const token = jwt.sign(user.id,"mysecret",{
            algorithm:"HS256",
        })

        return {
            ...user,
            token,
        };
    }

}
