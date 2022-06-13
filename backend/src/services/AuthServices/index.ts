import { userRepository } from '../../database/repositories'
import { SignInService } from './SgnInService'

const signInService = new SignInService(userRepository)

export {signInService}

