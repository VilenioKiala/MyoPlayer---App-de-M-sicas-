import { DataSource, EntityTarget } from "typeorm";
const config = require("../database/config/config.json")["test"]



export class TestHelper{
    testdataSource: DataSource;

    async createDataSource(){
        const testDataSource = new DataSource({
            ...config,
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