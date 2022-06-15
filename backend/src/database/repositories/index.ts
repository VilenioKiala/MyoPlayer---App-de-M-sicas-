import { AppDataSource } from '../dataSource';
import { MusicRepository } from './Musics/MusicRepository';
import { UserRepository } from './Users/user.repository';

const userRepository = new UserRepository(AppDataSource)
const musicRepository = new MusicRepository(AppDataSource)

export { userRepository, musicRepository }