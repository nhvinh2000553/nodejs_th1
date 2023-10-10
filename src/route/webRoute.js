import express from 'express';
const router = express.Router();
import getHomePage from '../controllers/HomeController'
import aboutPage from '../controllers/AboutController'
import UserController, {
    createUser,
    getListUser,
    login,
    detailUser,
} from "../controllers/UserController"
import userModel from '../services/userModel';

const initWebRouter = (app) => {
    router.get('/', getHomePage)
    router.get('/about', aboutPage)
    router.get('/list-user', UserController.getAllUser)
    // router.get('/list-user/:username', UserController.detailUser)
    router.get('/edit-user/:username', UserController.editUser)
    router.get('/update-user', UserController.updateUser)
    // router.get('/delete-user', UserController.deleteUser)
    router.get('/create-new-user', UserController.createUser)
    // router.get('/login', UserController.formLoginUser)
    // router.get('/logout', UserController.logOut)
    // router.get('/verrify-login', UserController.loginUser)
    router.get('/create-new-user', UserController.createUser)
    // router.get('/insert-new-user', UserController.insertUser)
    // router.get('/upload-file', UserController.uploadFile)
    // router.get('/save-file', UserController.saveFileUpload);
    router.post('/updateUser/:username', UserController.updateUser)
    router.get('*', (req, res) => {
        res.send("Lỗi 404, không tìm thấy trang");
     });
    return app.use('/', router)
}
export default initWebRouter