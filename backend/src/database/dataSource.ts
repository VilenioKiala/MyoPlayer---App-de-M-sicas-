import path from 'path'
import {DataSource} from 'typeorm'
import { databaseConfig } from '../config/database'

const AppDataSource = new DataSource({
    ...databaseConfig,
    entities:[`${__dirname}/entities/*.ts`],
    migrations:[`${__dirname}/migrations/*.ts`],
    cli:{
        entitiesDir:"entities",
        migrationsDir:"migrations"
    }
})

AppDataSource.initialize().then(()=>{
    console.log("The data source has been initialized")
})
.catch(err=>{
    console.log("Error during data source initialization ", err)
})

export {AppDataSource}