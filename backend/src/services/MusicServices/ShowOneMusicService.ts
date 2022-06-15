import { Music } from "../../database/entities/music.entity";
import { IMusicRepository } from "../../database/repositories/Musics/IMusicRepository";

export class ShowOneMusicService{
    constructor(private musicRepository: IMusicRepository){}
    async execute(id: string): Promise<Music>{
        const music = await this.musicRepository.findOneById(id)

        return music;
    }
}