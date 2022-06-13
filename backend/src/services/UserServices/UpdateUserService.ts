import { IUserRepository } from '../../database/repositories/Users/IUserRepository';
import { User } from '../../database/entities/user.entity';
interface IRequest{
    firstName?: string,
    lastName?: string,
    username?: string,
    password?: string,
}


export class UpdateUserService{
    constructor(private userRepository: IUserRepository){}
    
    async execute(id: string, data: IRequest): Promise<User>{
        const user = await this.userRepository.findOneById(id)

        const {firstName,lastName,username,password} = data

        Object.assign(user,{
            firstName: firstName ?? user.firstName,
            lastName: lastName ?? user.lastName,
            username: username ?? user.username,
            password: password ?? user.password,
        })

        if(password){
            user.encryptPassword()
        }

        const userUpdated = await this.userRepository.update(user)

        return userUpdated;
    }
}