import { DeleteUserService } from './../services/UserServices/DeleteUserService';
import { ShowOneUserService } from '../services/UserServices/ShowOneUserService';
import { UpdateUserService } from './../services/UserServices/UpdateUserService';
import { User } from "../database/entities/user.entity"
import { UserRepository } from "../database/repositories/Users/user.repository"
import { CreateUserService } from "../services/UserServices/CreateUserService"
import { ListAllUserService } from "../services/UserServices/ListAllUserService"
import { TestHelper } from "./TestHelper"


const testHelper = new TestHelper()

let userRepository;

describe("User Services",()=>{
    beforeAll(async ()=>{
        await testHelper.createDataSource()
        userRepository  = new UserRepository(testHelper.testdataSource)
    })
    afterEach(async ()=>{
        await testHelper.clear(User)
    })
    afterAll(()=>{
        testHelper.closeDataSource()
    })
    describe("Create user service",()=>{
    
        it("should create a new user",async ()=>{
            const createUserService = new CreateUserService(userRepository)
            
            
            const user = await createUserService.execute({firstName: "vilenio",lastName: "kiala", username:"vilas",password: "eliana"})
        
        
            expect({firstName: user.firstName, lastName: user.lastName, username:user.username}).toEqual({firstName: "vilenio",lastName: "kiala", username:"vilas"})
        })
    })

    describe("List all users service",()=>{
        it("should list all users",async ()=>{
            const createUserService = new CreateUserService(userRepository)
            await createUserService.execute({firstName: "vilenio",lastName: "kiala", username:"vilas",password: "eliana"})
            
            const listAllUsersService = new ListAllUserService(userRepository)
            
            const users = await listAllUsersService.execute()
            
            const {firstName, lastName, username} = users[0]
        
            expect({firstName, lastName, username}).toEqual({firstName: "vilenio", lastName: "kiala", username: "vilas"})
        })
    })

    describe("Show one user service",()=>{
        it("should show one user",async ()=>{
            const createUserService = new CreateUserService(userRepository)
            const userCreated = await createUserService.execute({firstName: "vilenio",lastName: "kiala", username:"vilas",password: "eliana"})
            
            const showOneUserService = new ShowOneUserService(userRepository)
            
            const user = await showOneUserService.execute(userCreated.id)
            
            const {firstName, lastName, username} = user;
        
            expect({firstName, lastName, username}).toEqual({firstName: "vilenio", lastName: "kiala", username: "vilas"})
        })
    })

    describe("Update user service",()=>{
        it("should update an existing user",async ()=>{
            const createUserService = new CreateUserService(userRepository)
            const updateUserService = new UpdateUserService(userRepository)
            

            const userCreated = await createUserService.execute({firstName: "vilenio",lastName: "kiala", username:"vilas",password: "eliana"})
            
            const userUpdated = await updateUserService.execute(userCreated.id,{firstName: "vilacas"})
            
            const {firstName, id} = userUpdated
        
            expect({firstName,id}).toEqual({firstName: "vilacas", id: userCreated.id})
        })
    })

    describe("Delete user service",()=>{
        it("should delete an existing user",async ()=>{
            const createUserService = new CreateUserService(userRepository)
            const deleteUserService = new DeleteUserService(userRepository)
            const showOneUserService = new ShowOneUserService(userRepository)
            
            const userCreated = await createUserService.execute({firstName: "vilenio",lastName: "kiala", username:"vilas",password: "eliana"})
            
            await deleteUserService.execute(userCreated.id)
            
            const userDeletedSearchCheck = await showOneUserService.execute(userCreated.id)
        
            expect(userDeletedSearchCheck).toBeNull()
        })
    })
})
