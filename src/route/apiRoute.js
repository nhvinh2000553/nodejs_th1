import express from 'express'
import ApiUserController from '../controllers/ApiUserController.js'

const router = express.Router()
const initAPIRouter = (app) => {
    router.get('/get-all-user', ApiUserController.getAllUsers)
    router.get('/detail-user/:user', ApiUserController.detailUser)

    return app.use("/api/v1", router)
}
export default initAPIRouter