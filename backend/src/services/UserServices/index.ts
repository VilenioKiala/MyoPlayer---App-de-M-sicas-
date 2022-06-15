import { DeleteUserService } from './DeleteUserService';
import { UpdateUserService } from './UpdateUserService';
import { userRepository } from '../../database/repositories'

import {CreateUserService} from './CreateUserService'
import { ListAllUserService } from './ListAllUserService'

const createUserService = new CreateUserService(userRepository)
const listAllUsersService = new ListAllUserService(userRepository)
const updateUserService = new UpdateUserService(userRepository)
const deleteUserService = new DeleteUserService(userRepository)

export {createUserService,listAllUsersService,updateUserService,deleteUserService}

