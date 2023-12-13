import express from 'express';
import {indexGetOtpController} from '../controller/indexController.js';

var indexRouter = express.Router();

indexRouter.post('/getotp',indexGetOtpController);

export default indexRouter;