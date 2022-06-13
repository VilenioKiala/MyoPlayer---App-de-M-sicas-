import { IUserRepository } from '../../database/repositories/Users/IUserRepository';
import { User } from "../../database/entities/user.entity";

export class ListAllUserService{
    constructor(private userRepository: IUserRepository){}

    async execute(): Promise<User[]>{
        const users = await this.userRepository.findAll()
        
        return users;
    }
}