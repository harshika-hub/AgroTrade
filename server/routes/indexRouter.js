import express from 'express';
import {indexGetOtpController,indexUserRegistrationController,indexOrganizationRegistrantionController} from '../controller/indexController.js';
import { upload } from '../middleware/fileUpload.js';

var indexRouter = express.Router();

indexRouter.post('/getotp',indexGetOtpController);
indexRouter.post('/userregistration',indexUserRegistrationController);
indexRouter.post('/organizationregistration',upload.single('org_image'),indexOrganizationRegistrantionController);


var indexRouter = express.Router();
export default indexRouter;