import express from 'express';
import { indexOrganizationRegistrantionController,indexGetOtpController,indexUserRegistrationController,indexUserLoginController } from '../controller/indexController.js';
// import { upload } from '../middleware/fileUpload.js';

var indexRouter = express.Router();

indexRouter.post('/getotp',indexGetOtpController);
indexRouter.post('/userregistration',indexUserRegistrationController);
// indexRouter.post('/organizationregistration',upload.single('org_image'),indexOrganizationRegistrantionController);
indexRouter.post('/organizationregistration',indexOrganizationRegistrantionController);
<<<<<<< HEAD
indexRouter.post('/userLogin',indexUserLoginController);


=======
indexRouter.post('/userlogin',indexUserLoginController);

>>>>>>> 41b6a50a2bbfe4de1f5a124c2dbdc6fc743e13fa
export default indexRouter;