import { multerConfig } from './../../config/multer';
import { IMusicRepository } from "../../database/repositories/Musics/IMusicRepository";
import path from 'path'
import fs from 'fs'

export class DeleteMusicService{
    constructor(private musicRepository: IMusicRepository){}

    async execute(id: string){
        const music = await this.musicRepository.findOneById(id)

        await this.musicRepository.delete(music)

        fs.unlinkSync(path.resolve(__dirname,"..","..",multerConfig.destination,"covers",music.cover))
        fs.unlinkSync(path.resolve(__dirname,"..","..",multerConfig.destination,"musics",music.music))

        return music;
    }
}