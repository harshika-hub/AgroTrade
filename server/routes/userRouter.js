import express from 'express';
import { upload } from '../middleware/fileUpload.js';
import { aunthicateJWT } from '../middleware/jwtVerification.js';
import { statusVerifyupdateController, expertViewDataController, bookExpertController, updateAgriLandController, getExpertContrller, 
    addAgriLandController, removeAgriLandController, getAgriLandController,coldStLandsInsertController, updateColdStLandController, 
    deleteColdStLandController,getcoldStLandsController, updateGrainController,deleteGrainController, getGrainController, grainInsertController, 
    getUserController, newExpertController, updateProfileController,addEquipmentController ,getEquipmentController,deleteEquipmentController,
    updateEquipmentController,getMarketGrainContrller,getMarketEquipmentContrller,getMarketLandContrller,getMarketStorageContrller,addcartController,
    getCartController,updateCartController, removeCartController,removeCartequipmentController,updateCartequipmentController,addcartEqpController,
    equipmentCartController,grainTotalorderController} 
     from '../controller/userController.js';
     import { grainPayController, grainPaycancelController, grainPaysuccessController } from '../controller/paymentController.js';
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
userRouter.post('/UpdateAgriLd',upload.fields([{ name: 'image', maxCount: 1 }, { name: 'image360', maxCount: 1 }]),updateAgriLandController);
userRouter.post('/addEquipment',upload.single('image'),addEquipmentController);
userRouter.post('/getEquipment',getEquipmentController);
userRouter.post('/deleteEquipmentId',deleteEquipmentController);
userRouter.post('/UpdateEquipment',upload.single("image"),updateEquipmentController);
userRouter.get('/getAgriLand',getAgriLandController);
userRouter.post("/addAgriLand", upload.fields([{ name: 'image', maxCount: 1 }, { name: 'image360', maxCount: 1 }]), addAgriLandController);
userRouter.get("/removeAgriLand",removeAgriLandController)
userRouter.get("/getExpert",getExpertContrller); 
userRouter.get("/marketGrains",getMarketGrainContrller); 
userRouter.get("/marketEquipment",getMarketEquipmentContrller); 
userRouter.get("/marketLand",getMarketLandContrller); 
userRouter.get("/marketStorage",getMarketStorageContrller); 
userRouter.post("/addTocart",aunthicateJWT,addcartController); 
userRouter.post("/getCartitems",aunthicateJWT,getCartController); 
userRouter.post("/updateCartQuantity",aunthicateJWT,updateCartController); 
userRouter.post("/removeCart",aunthicateJWT,removeCartController); 
userRouter.post("/addTocartGrain",aunthicateJWT,addcartEqpController);  
userRouter.post("/equipmentCartitems",aunthicateJWT,equipmentCartController); 
userRouter.post("/updateCartQuantityequipment",aunthicateJWT,updateCartequipmentController); 
userRouter.post("/removeCartequipment",aunthicateJWT,removeCartequipmentController); 
userRouter.get("/getTotalorder/:token",aunthicateJWT,grainTotalorderController);
userRouter.post('/grainpayment',aunthicateJWT,grainPayController)
userRouter.get('/paysuccess/:total/:invoice/:address/:id/:day/:shipping',grainPaysuccessController);
userRouter.get('/paycancel',grainPaycancelController);

userRouter.post("/expertViewData", expertViewDataController);
userRouter.post("/statusVerifyupdate", statusVerifyupdateController);
userRouter.post('/bookExpert',bookExpertController);


export default userRouter;