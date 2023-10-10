import dotenv from "dotenv"
import express from 'express'
import configViewEngine from "./configs/viewEngine"
import initWebRouter from "./route/webRoute"
import path from "path"
const app = express()
dotenv.config()
const port = process.env.PORT
// const port = 3000
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
configViewEngine(app)
initWebRouter(app);
app.use(express.static(path.join(__dirname, 'public')))
initWebRouter(app)
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.render('about')
}) 
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})