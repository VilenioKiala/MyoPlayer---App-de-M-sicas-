import { User } from "../../database/entities/user.entity";
import { IUserRepository } from "../../repositories/Users/IUserRepository";

export class ShowOneUserService{
    constructor(private userRepository: IUserRepository){}
    async execute(id: string): Promise<User>{
        const user = await this.userRepository.findOneById(id)

        return user;
    }
}