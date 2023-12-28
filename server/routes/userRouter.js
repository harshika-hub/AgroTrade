import express from 'express';
import { upload } from '../middleware/fileUpload.js';
import { newExpertController } from '../controller/userController.js';
const userRouter = express.Router();
userRouter.post("/newExpert",upload.single('certificate'),newExpertController)

export default userRouter;