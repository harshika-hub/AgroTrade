import { TEMP_SESSION1 } from "./indexController.js";
import { TEMP_SESSION2 } from "../middleware/jwtVerification.js";
    
var LOG = {}

export const tempUserController = (request,response)=>{
    console.log("inside tempUserController");
    console.log(TEMP_SESSION1);
    console.log(TEMP_SESSION2);
    if(TEMP_SESSION1=={}){
        console.log("if");
        LOG=TEMP_SESSION1;
    }else{
        console.log("else");
        LOG=TEMP_SESSION2;
        // LOG.role=TEMP_SESSION2.role;
    }

    console.log(LOG);
}