import { DataSource, EntityTarget } from "typeorm";
import { databaseConfig } from "../config/database";



export class TestHelper{
    testdataSource: DataSource;

    async createDataSource(){
        const testDataSource = new DataSource({
            ...databaseConfig,
            entities: [`src/database/entities/*.ts`],
            migrations: [`src/database/entities/*.ts`],
        })

        await testDataSource.initialize()
    
        this.testdataSource = testDataSource;
    }

    closeDataSource(){
        this.testdataSource.close()
    }

    async clear(entity: EntityTarget<unknown>){
        await this.testdataSource.manager.clear(entity)
    }
}