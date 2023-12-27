import express from 'express';
import { indexOrganizationRegistrantionController,indexGetOtpController,indexUserRegistrationController,indexOrganizationLoginController, indexUserLoginController, indexCheckOtpController,indexUserChangePasswordController,indexOrgChangePasswordController } from '../controller/indexController.js';
import { upload } from '../middleware/fileUpload.js';
import { aunthicateJWT,authorizeUser } from '../middleware/jwtVerification.js';
import { tempUserController } from '../controller/userController.js';
var indexRouter = express.Router();

indexRouter.post('/',aunthicateJWT,authorizeUser,tempUserController);
indexRouter.post('/getotp',indexGetOtpController);
indexRouter.post('/userregistration',indexUserRegistrationController);
indexRouter.post('/userlogin',indexUserLoginController);
// indexRouter.post('/organizationregistration',upload.single('org_image'),indexOrganizationRegistrantionController);
indexRouter.post('/organizationregistration',upload.single('org_image'),indexOrganizationRegistrantionController);
indexRouter.post('/organizationlogin',indexOrganizationLoginController);

indexRouter.post('/checkotp',indexCheckOtpController);
indexRouter.post('/userchangepassword',indexUserChangePasswordController);
indexRouter.post('/orgchangepassword',indexOrgChangePasswordController);

export default indexRouter;