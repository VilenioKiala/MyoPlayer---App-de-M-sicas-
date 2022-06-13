import { User } from "../../entities/user.entity";

export interface IUserRepository{
    create(user: User): Promise<User>;
    update(user: User): Promise<User>;
    delete(user: User): Promise<User>;
    findOneByUsername(username: string): Promise<User>;
    findOneById(id: string): Promise<User>;
    findAll(): Promise<User[]>;
}