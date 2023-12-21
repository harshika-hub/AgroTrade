import express from 'express';
import { indexchangeController, indexOtpCheckController, indexOrganizationRegistrantionController,indexGetOtpController,indexUserRegistrationController,indexOrgLoginController,indexUserLoginController } from '../controller/indexController.js';
import { upload } from '../middleware/fileUpload.js';

var indexRouter = express.Router();

indexRouter.post('/getotp',indexGetOtpController);
indexRouter.post('/userregistration',indexUserRegistrationController);
// indexRouter.post('/organizationregistration',upload.single('org_image'),indexOrganizationRegistrantionController);
indexRouter.post('/organizationregistration',upload.single('org_image'),indexOrganizationRegistrantionController);
indexRouter.post('/orgLogin',indexOrgLoginController);
indexRouter.post('/userLogin',indexUserLoginController);
indexRouter.post('/check',indexOtpCheckController);
indexRouter.post('/change',indexchangeController);


export default indexRouter;