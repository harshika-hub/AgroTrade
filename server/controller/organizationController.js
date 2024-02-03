import { users, grains, equipments, coldStLands, agriLand, cart ,expertBook} from "../models/userModel.js";
import organisations,{contractLandModel} from "../models/organizationModel.js";
import mongoose from "mongoose";
import { request, response } from "express";

export const orgVeiwAgriLandController=async(request,response)=>{
    try {
        var orgAgriList = await agriLand.find({$and:[{admin_verify:true},{avilable:true}]});
        console.log('------',orgAgriList);
        

        response.status(200).json({ result:orgAgriList })
    } catch (error) {
        console.log('Eroor in orgcontroller',err);
        response.status(203).json({message:"Error in Org view agri Controller"}); 
    }
}

export const orgVeiwColdLandController=async(request,response)=>{
    try {
        var orgColdList = await coldStLands.find({$and:[{admin_verify:true},{avilable:true}]});
        response.status(200).json({ result:orgColdList })
    } catch (error) {
        console.log('Eroor in orgcontroller',err);
        response.status(203).json({message:"Error in Org view Cold Controller"}); 
    }
}

export const requestForLandController = async(request,response)=>{
    try{
        var orgObj = await organisations.findOne({dealer_email:request.body.dealer_email});
        var obj = {
            factoryOwnerId:orgObj._id,
            landId:request.body.LandId,
            grainName:request.body.grainName,
            quantity:request.body.quantity,
            timeDuration:request.body.timeDuration
        } 
        var result = await contractLandModel.create(obj);
        console.log("Insert Successfully");
    }catch(err){
        console.log("err",err);
    }
}

export const orgVeiwProfileController= async(request,response)=>{
    // console.log('------',request.body);
    
    try {

        var orgProfile=await organisations.findOne({dealer_email:request.body.dealer_email})
            // console.log('orgprofile',orgProfile);
            response.status(200).json({result:orgProfile})
            
        
    } catch (error) {
        console.log('Eroor in orgcontroller',error);
        response.status(203).json({message:"Error in Org view profile Controller"}); 
  
        
    }
}

export const orgUpdateProfileController=async(request,response)=>{
    try {
        const{dealer_email}=request.body;
        console.log("res.body",request.body);
    try {
        var image=''
        if(request.file.filename!="undefine"){
            image=request.file.filename;
            request.body={...request.body,["image"]:image};
        }
    } catch (err) {
        console.log('err');
    }
    const result=await organisations.updateOne({dealer_email:dealer_email},{$set:request.body});
    console.log("result",result);
    response.status(201).json({message:"success"})
    } catch (err) {
        console.log("err",err);
    }

}
