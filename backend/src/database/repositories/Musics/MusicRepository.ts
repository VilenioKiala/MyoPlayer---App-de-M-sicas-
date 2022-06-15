import { DataSource } from "typeorm";
import { Music } from "../../entities/music.entity";
import { IMusicRepository } from "./IMusicRepository";

export class MusicRepository implements IMusicRepository {
    constructor(private dataSource: DataSource){}

    async create(music: Music): Promise<Music>{
        const musicCreated = await this.dataSource.manager.save(music)

        musicCreated.autor.password = undefined;
        
        return musicCreated;
    }

    async update(music: Music){
        const userUpdated = await this.dataSource.manager.save(music)

        return userUpdated;
    }

    async findOneById(id: string): Promise<Music>{
        const music = await this.dataSource.manager.findOne(Music,{
            relations: {
                autor: true,
            },
            select:{
                autor: {
                    id: true,
                    firstName: true,
                    lastName: true,
                    username: true,
                },
                titulo: true,
                id: true,
                music: true,
                cover: true,
            },
            where:{
                id
            },
        })

        return music;
    }

    async findAll(): Promise<Music[]>{
        const musics = await this.dataSource.manager.find(Music,{
            relations:{
                autor: true,
            },
            select: {
                autor: {
                    id: true,
                    firstName: true,
                    lastName: true,
                    username: true,
                },
                cover: true,
                id: true,
                music: true,
                titulo: true,
            }
        });

        

        return musics;
    }

    async delete(music: Music): Promise<Music>{
        const deleteResult = await this.dataSource.manager.delete(Music,{id: music.id})
        
        return music;
    }
}