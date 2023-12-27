import { TEMP_SESSION } from "./indexController.js";

export const tempUserController = (request,response)=>{
    console.log("inside tempUserController");
    console.log(TEMP_SESSION);
}