import { DeleteMusicService } from './DeleteMusicService';
import { UpdateMusicService } from './UpdateMusicService';

import {CreateMusicService} from './CreateMusicService'
import { ListAllMusicsService } from './ListAllMusicsService'
import { ShowOneMusicService } from './ShowOneMusicService';
import { musicRepository } from '../../database/repositories';

const createMusicService = new CreateMusicService(musicRepository)
const listAllMusicsService = new ListAllMusicsService(musicRepository)
const updateMusicService = new UpdateMusicService(musicRepository)
const showOneMusicService = new ShowOneMusicService(musicRepository)
const deleteMusicService = new DeleteMusicService(musicRepository)

export {createMusicService, listAllMusicsService,showOneMusicService,updateMusicService,deleteMusicService}

