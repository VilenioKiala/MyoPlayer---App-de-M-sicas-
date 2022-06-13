import { AppDataSource } from '../dataSource';
import { UserRepository } from './Users/user.repository';

export const userRepository = new UserRepository(AppDataSource)