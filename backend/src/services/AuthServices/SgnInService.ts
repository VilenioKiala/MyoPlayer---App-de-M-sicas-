import { User } from '../../database/entities/user.entity';
import { IUserRepository } from '../../database/repositories/Users/IUserRepository';

interface IRequest{
    username:string,
    password: string,
}


export class SignInService{
    constructor(private userRepository: IUserRepository){}

    async execute({username,password}: IRequest){
        const user = await this.userRepository.findOneByUsername(username)
        
        if(!user){
            throw new Error("User not Found!")
        }
        
        if(!user.comparePassword(password)){
            throw new Error("Password and username doesn't match!")
        }
        
        user.password = undefined;
        
        return user;
    }

}
