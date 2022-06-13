import path from 'path'
import {DataSource} from 'typeorm'


const env = process.env.NODE_ENV || "development"
const config = require(path.join(__dirname,"config","config.json"))[env]

const AppDataSource = new DataSource({
    ...config,
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