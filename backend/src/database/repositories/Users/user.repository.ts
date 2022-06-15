import { DataSource } from "typeorm";
import { User } from "../../entities/user.entity";
import { IUserRepository } from "./IUserRepository";

export class UserRepository implements IUserRepository {
    constructor(private dataSource: DataSource){}

    async create(user: User): Promise<User>{
        const userCreated = await this.dataSource.manager.save(user)
        
        return userCreated;
    }

    async update(user: User){
        const userUpdated = await this.dataSource.manager.save(user)

        return userUpdated;
    }

    async findOneById(id: string): Promise<User>{
        const user = await this.dataSource.manager.findOne(User,{
            where:{
                id
            }
        })

        return user;
    }

    async findAll(): Promise<User[]>{
        const users = await this.dataSource.manager.find(User);

        return users;
    }

    async findOneByUsername(username: string): Promise<User>{
        const users = await this.dataSource.manager.findOne(User,{
            where: {
                username
            }
        })

        return users;
    }

    async delete(user: User): Promise<User>{
        const deleteResult = await this.dataSource.manager.delete(User,{id: user.id})
        
        return user;
    }
}