import dotenv from "dotenv"
import express from 'express'
import configViewEngine from "./configs/viewEngine"
import initWebRouter from "./route/webRoute"
import path from "path"
const app = express()
dotenv.config()
const port = process.env.PORT
// const port = 3000
app.use(express.urlencoded({ extended: false}))
app.use(express.json())
configViewEngine(app)
app.use(express.static(path.join(__dirname, 'public')))
initWebRouter(app);



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})