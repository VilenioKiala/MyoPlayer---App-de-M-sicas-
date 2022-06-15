import { multerConfig } from './../../config/multer';
import { validateOrReject, validate } from 'class-validator';
import { IMusicRepository } from '../../database/repositories/Musics/IMusicRepository';
import { Music } from '../../database/entities/music.entity';
import fs from 'fs'
import path from 'path'

interface IRequest{
    titulo?: string,
    cover?: string,
}


export class UpdateMusicService{
    constructor(private musicRepository: IMusicRepository){}
    
    async execute(id: string, data: IRequest): Promise<Music>{
        const music = await this.musicRepository.findOneById(id)

        const {titulo,cover} = data

        Object.assign(music,{
            titulo: titulo ?? music.titulo,
            cover: cover ?? music.cover,
        })

        const validationErrors = await validate(music)

        if(validationErrors.length > 0){
            fs.unlinkSync(path.resolve(__dirname,"..","..",multerConfig.destination,"covers",music.cover))
        }

        await validateOrReject(music)

        const musicUpdated = await this.musicRepository.update(music)

        if(cover){
            fs.unlinkSync(path.resolve(__dirname,"..","..",multerConfig.destination,"covers",music.cover))
        }

        return musicUpdated;
    }
}