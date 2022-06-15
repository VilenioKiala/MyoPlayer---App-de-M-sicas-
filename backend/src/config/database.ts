const env = process.env.NODE_ENV || "development";
const databases = {
    development:{
        username: "root",
        password: "",
        database: "musicaapp",
        host: "localhost",
        port:3306,
        type: "mysql"
    },
    test: {
        username: "root",
        password: "",
        database: "testmusicaapp",
        host: "localhost",
        port:3306,
        type: "mysql"
    },
    production: {
        username: "root",
        password: "",
        database: "musicaapp",
        host: "localhost",
        port:3306,
        type: "mysql"
    },
}


const databaseConfig = databases[env]

export {databaseConfig}