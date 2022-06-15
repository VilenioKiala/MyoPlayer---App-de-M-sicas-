import express from 'express'
import { engine } from "express-handlebars";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import path from 'path'
import { apiRouter } from "./api";

const app = express()

app.use(express.static(path.join(__dirname,"uploads")))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())
app.use("/api",apiRouter)
app.engine("handlebars",engine())
app.set("view engine", "handlebars")
app.set("views", path.join(__dirname,"admin","views"))

app.listen(9999,()=>{
    console.log("The server is running on 9999")
})

