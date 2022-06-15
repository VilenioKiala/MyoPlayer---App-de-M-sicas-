import { User } from "../../database/entities/user.entity";
import { IUserRepository } from '../../database/repositories/Users/IUserRepository';
import {validateOrReject,validate} from 'class-validator'

interface IRequest {
    firstName: string, 
    lastName: string, 
    username: string, 
    password: string,
}

export class CreateUserService{
    
    constructor(private userRepository: IUserRepository){};

    async execute({firstName, lastName, username, password}: IRequest){
        const user = new User()
        
        Object.assign(user, {
            firstName,
            lastName,
            username,
            password,
        })

        await validateOrReject(user)
        
        const userExist = await this.userRepository.findOneByUsername(user.username)
        
        if(userExist){
            throw new Error("Já existe um usuário com esse nome de usuário!")
        }

        user.encryptPassword()
        
        const userCreated = await this.userRepository.create(user)
        
        userCreated.password = undefined;
        
        return userCreated;
    }
}

