import { IMusicRepository } from '../../database/repositories/Musics/IMusicRepository';
import { Music } from '../../database/entities/music.entity';

export class ListAllMusicsService{
    constructor(private musicRepository: IMusicRepository){}

    async execute(): Promise<Music[]>{
        const musics = await this.musicRepository.findAll()
        
        return musics;
    }
}