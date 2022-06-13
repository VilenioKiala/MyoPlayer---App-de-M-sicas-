import { User } from "../../database/entities/user.entity";
import { IUserRepository } from '../../database/repositories/Users/IUserRepository';

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
        
        user.encryptPassword()
        
        const userCreated = await this.userRepository.create(user)
        
        userCreated.password = undefined;
        
        return userCreated;
    }
}

