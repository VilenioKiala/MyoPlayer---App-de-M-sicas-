import { DeleteUserService } from './DeleteUserService';
import { UpdateUserService } from './UpdateUserService';
import { userRepository } from '../../repositories'

import {CreateUserService} from './CreateUserService'
import { ListAllUserService } from './ListAllUserService'
import { ShowOneUserService } from './ShowOneUserService';

const createUserService = new CreateUserService(userRepository)
const listAllUsersService = new ListAllUserService(userRepository)
const updateUserService = new UpdateUserService(userRepository)
const showOneUserService = new ShowOneUserService(userRepository)
const deleteUserService = new DeleteUserService(userRepository)

export {createUserService,listAllUsersService,updateUserService,showOneUserService,deleteUserService}

