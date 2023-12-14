import express from 'express';
import {indexGetOtpController,indexUserRegistrationController} from '../controller/indexController.js';

var indexRouter = express.Router();

indexRouter.post('/getotp',indexGetOtpController);
indexRouter.post('/userRegistration',indexUserRegistrationController);

export default indexRouter;