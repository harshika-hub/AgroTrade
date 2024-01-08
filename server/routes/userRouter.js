import express from 'express';
import { upload } from '../middleware/fileUpload.js';
import { getUserController, newExpertController, updateProfileController } from '../controller/userController.js';
import { aunthicateJWT } from '../middleware/jwtVerification.js';
const userRouter = express.Router();
userRouter.post("/newExpert",upload.single('certificate'),newExpertController)
userRouter.post("/getUser",aunthicateJWT,getUserController)
userRouter.post("/updateUser",upload.single("image"),updateProfileController);

export default userRouter;