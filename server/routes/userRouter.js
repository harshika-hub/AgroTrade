import express from 'express';
import { upload } from '../middleware/fileUpload.js';
import { getExpertContrller, addAgriLandController, removeAgriLandController, getAgriLandController, coldStLandsInsertController, updateColdStLandController, deleteColdStLandController,getcoldStLandsController, updateGrainController, deleteGrainController, getGrainController, grainInsertController, getUserController, newExpertController, updateProfileController,addEquipmentController ,getEquipmentController,deleteEquipmentController,updateEquipmentController} from '../controller/userController.js';
import { aunthicateJWT } from '../middleware/jwtVerification.js';
const userRouter = express.Router();
userRouter.post("/newExpert",upload.single('certificate'),newExpertController)
userRouter.post("/getUser",aunthicateJWT,getUserController)
userRouter.post('/grainInsert',upload.single('image'),grainInsertController);
userRouter.post('/coldStInsert',upload.fields([{ name: 'image', maxCount: 1 }, { name: 'image360', maxCount: 1 }]),coldStLandsInsertController);
userRouter.post("/updateUser",upload.single("image"),updateProfileController);
userRouter.post('/getGrain',getGrainController);
userRouter.post('/getcoldSt',getcoldStLandsController);
userRouter.post('/deleteGrainId',deleteGrainController);
userRouter.post('/deletecoldStId',deleteColdStLandController);
userRouter.post('/UpdateGrain',upload.single("image"),updateGrainController);
userRouter.post('/UpdatecoldStId',upload.fields([{ name: 'image', maxCount: 1 }, { name: 'image360', maxCount: 1 }]),updateColdStLandController);
userRouter.post('/addEquipment',upload.single('image'),addEquipmentController);
userRouter.post('/getEquipment',getEquipmentController);
userRouter.post('/deleteEquipmentId',deleteEquipmentController);
userRouter.post('/UpdateEquipment',upload.single("image"),updateEquipmentController);
userRouter.get('/getAgriLand',getAgriLandController);
userRouter.post("/addAgriLand", upload.fields([{ name: 'image', maxCount: 1 }, { name: 'image360', maxCount: 1 }]), addAgriLandController);
userRouter.get("/removeAgriLand",removeAgriLandController)
userRouter.get("/getExpert",getExpertContrller);


export default userRouter;