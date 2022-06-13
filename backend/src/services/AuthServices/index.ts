import { userRepository } from '../../repositories'
import { SignInService } from './SgnInService'

const signInService = new SignInService(userRepository)

export {signInService}

