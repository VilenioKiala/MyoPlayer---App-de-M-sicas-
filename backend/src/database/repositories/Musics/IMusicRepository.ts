import { Music } from "../../entities/music.entity";
import { User } from "../../entities/user.entity";

export interface IMusicRepository{
    create(music: Music): Promise<Music>;
    update(music: Music): Promise<Music>;
    delete(music: Music): Promise<Music>;
    findOneById(id: string): Promise<Music>;
    findAll(): Promise<Music[]>;
}