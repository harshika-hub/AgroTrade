import express from 'express';
import { indexOrganizationRegistrantionController,indexGetOtpController,indexUserRegistrationController,indexOrganizationLoginController } from '../controller/indexController.js';
import { upload } from '../middleware/fileUpload.js';
import { aunthicateJWT,authorizeUser } from '../middleware/jwtVerification.js';

var indexRouter = express.Router();

indexRouter.post('/',aunthicateJWT,authorizeUser);
indexRouter.post('/getotp',indexGetOtpController);
indexRouter.post('/userregistration',indexUserRegistrationController);
// indexRouter.post('/organizationregistration',upload.single('org_image'),indexOrganizationRegistrantionController);
indexRouter.post('/organizationregistration',upload.single('org_image'),indexOrganizationRegistrantionController);
indexRouter.post('/organizationlogin',indexOrganizationLoginController);

export default indexRouter;