import { UpdateUser } from './UpdateUser';
import { CreateUser } from './CreateUser';
import { ListUser } from './ListUser';
import { DeleteUser } from './DeleteUser';
import { ShowOneUser } from './ShowOneUser';

const createUser = new CreateUser()
const listUser = new ListUser()
const updateUser = new UpdateUser()
const showOneUser = new ShowOneUser()
const deleteUser = new DeleteUser()

export {createUser,listUser,updateUser,showOneUser,deleteUser}