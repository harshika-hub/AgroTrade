import express from 'express';
import { indexOrganizationRegistrantionController,indexGetOtpController,indexUserRegistrationController,indexUserLoginController } from '../controller/indexController.js';
// import { upload } from '../middleware/fileUpload.js';

var indexRouter = express.Router();

indexRouter.post('/getotp',indexGetOtpController);
indexRouter.post('/userregistration',indexUserRegistrationController);
// indexRouter.post('/organizationregistration',upload.single('org_image'),indexOrganizationRegistrantionController);
indexRouter.post('/organizationregistration',indexOrganizationRegistrantionController);
indexRouter.post('/userlogin',indexUserLoginController);

export default indexRouter;