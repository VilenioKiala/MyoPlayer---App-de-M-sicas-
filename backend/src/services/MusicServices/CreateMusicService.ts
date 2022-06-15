import { User } from "../../database/entities/user.entity";
import { IUserRepository } from '../../database/repositories/Users/IUserRepository';
import {validate, validateOrReject} from 'class-validator'
import { MusicRepository } from "../../database/repositories/Musics/MusicRepository";
import { Music } from "../../database/entities/music.entity";
import { multerConfig } from "../../config/multer";
import fs from 'fs'
import path from 'path'

interface IRequest {
    cover: string;
    music: string;
    titulo: string;
    autor: User;
}

export class CreateMusicService{
    
    constructor(private musicRepository: MusicRepository){};

    async execute({ cover, music, titulo,autor }: IRequest){
        const newMusic = new Music()
        
        Object.assign(newMusic, {
            cover, 
            music, 
            titulo,
            autor,
        })

        const validationErrors = await validate(newMusic)


        if(validationErrors.length > 0){
            fs.unlink(path.resolve(__dirname,"..","..",multerConfig.destination,"musics",newMusic.music),(error)=>{
                if(error){
                    throw new Error(error.message)
                }
            })
            fs.unlink(path.resolve(__dirname,"..","..",multerConfig.destination,"covers",newMusic.cover),(error)=>{
                if(error){
                    throw new Error(error.message)
                }
            })
        }

        await validateOrReject(newMusic)
        
        const musicCreated = await this.musicRepository.create(newMusic)
        
        
        return musicCreated;
    }
}

