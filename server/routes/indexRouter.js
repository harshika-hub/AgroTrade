import express from 'express';
import {indexGetOtpController,organisationsSignUpController} from '../controller/indexController.js';
import { upload } from '../middleware/fileUpload.js';


var indexRouter = express.Router();

// indexRouter.post('/getotp',indexGetOtpController);
indexRouter.post('/organisationRegister',upload.single('org_image'));

export default indexRouter;

// git add .
// git commit -m "updated 14/12/23 12:13"
// git push origin Chirag