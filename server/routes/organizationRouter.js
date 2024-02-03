import express from 'express';
import { upload } from '../middleware/fileUpload.js';
import { aunthicateJWT } from '../middleware/jwtVerification.js';
import {orgVeiwAgriLandController,orgVeiwColdLandController,requestForLandController,orgVeiwProfileController,orgUpdateProfileController} from '../controller/organizationController.js'
const orgRouter = express.Router();
orgRouter.get("/orgVeiwAgriLand",orgVeiwAgriLandController)
orgRouter.get("/orgVeiwColdLand",orgVeiwColdLandController)
orgRouter.post("/requestForLand",requestForLandController)
orgRouter.post("/getOrgProfile",orgVeiwProfileController)
orgRouter.post("/UpdateOrgProfile",orgUpdateProfileController)
export default orgRouter;