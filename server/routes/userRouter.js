import express from 'express';
import { tempUserController } from '../controller/userController.js';
// import { temp } from '../controller/indexController.js';
const userRouter = express.Router();

userRouter.get('/',tempUserController);
export default userRouter;