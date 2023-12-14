import express from 'express';
import {indexGetOtpController,indexUserRegistrationController,organisationsSignUpController} from '../controller/indexController.js';
import { upload } from '../middleware/fileUpload.js';

var indexRouter = express.Router();

indexRouter.post('/getotp',indexGetOtpController);
indexRouter.post('/userRegistration',indexUserRegistrationController);
indexRouter.post('/organisationregister',upload.single('org_image'),organisationsSignUpController);


var indexRouter = express.Router();
export default indexRouter;