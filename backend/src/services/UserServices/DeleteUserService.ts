import { IUserRepository } from "../../database/repositories/Users/IUserRepository";

export class DeleteUserService{
    constructor(private userRepository: IUserRepository){}

    async execute(id: string){
        console.log("Meu cú tem mel")
        const user = await this.userRepository.findOneById(id)

        await this.userRepository.delete(user)

        return user;
    }
}