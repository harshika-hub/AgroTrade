import jwt from 'jsonwebtoken';
import organisations from '../models/organizationModel.js';
import admin from '../models/adminModel.js';
import users from '../models/userModel.js';
import dotenv from 'dotenv';

dotenv.config();

var TEMP_SESSION2 = {};


export const aunthicateJWT = (request,response,next)=>{
    console.log('inside authenticateJWT');
    try{
        const SECRET_KEY = process.env.JWT_SECRET_KEY;
        const TOKEN = request.body.token;
        if(TOKEN){
            jwt.verify(TOKEN,SECRET_KEY,(error,payload)=>{
                if(error){
                    console.log('Error inside verify method : ',error);
                    response.status(204).json({message:'error'});
                }else{
                    console.log('Authentication Successfull');
                    request.payload = payload;
                    next();
                }
            });
        }else{
            console.log('Token not avilable.');
            response.status(204).json({message:'error'})
        }
    }catch(error){
        console.error("Error while Authentication : ",error);
        response.status(204).json({message:"error"});
    }
}



export const authorizeUser = async(request,response,next)=>{
    if(request.payload.data.role == process.env.USER_ROLE){
        try{
            var loggedUser = await users.findOne(
                {email: request.payload.data.email },
                {password : 0, _id:0 }
            );
            if (loggedUser) {
                TEMP_SESSION2.email = loggedUser.email;
                TEMP_SESSION2.role = process.env.USER_ROLE;
                response.status(200).json({message:"success", logData :{log : loggedUser, role:process.env.USER_ROLE}});
                console.log("user Login Successfully.");
            }else{
                console.error('User data not found while Authorization.');
                response.status(204).json({message:'error'});
            }
        }catch(error){
            console.log("Error while fetching User data inside Autherization : ",error);
            response.status(204).json({message:'error'});
            
        }
    }else if(request.payload.data.role==process.env.ORG_ROLE){
        try{
            var loggedOrg = await organisations.findOne(
                { org_email: request.payload.data.email },
                {password : 0, _id:0}
            );
            if(loggedOrg){
                TEMP_SESSION2.email = loggedOrg.org_email;
                TEMP_SESSION2.role = process.env.ORG_ROLE;
                response.status(200).json({message:"success", logData :{log : loggedOrg, role:process.env.ORG_ROLE}});
                console.log("Organization Login Successfully.");
            }else{
                console.error('Organization data not found while Authorization.');
                response.status(204).json({message:'error'});
            }
        }catch(error){
            console.log("Error while fetching Organization data inside Autherization : ",error);
            response.status(204).json({message:'error'});
        }
    }else if(request.payload.data.role==process.env.ADMIN_ROLE){
        try{
            var loggedAdmin = await admin.findOnefindOne(
                { email: request.payload.data.email },
                {password : 0, _id:0}
            );
            if(loggedAdmin){
                TEMP_SESSION2.email = loggedAdmin.email;
                TEMP_SESSION2.role = process.env.ADMIN_ROLE;
                response.status(200).json({message:"success", logData :{log : loggedAdmin, role:process.env.ADMIN_ROLE}});
                console.log("Organization Login Successfully.");
            }else{
                console.error('Admin data not found while Authorization.');
                response.status(204).json({message:'error'});
            }
        }catch(error){
            console.log("Error while fetching Admin data inside Autherization : ",error);
            response.status(204).json({message:'error'});
        }
    }else{
        console.error('Authorization Failed.');
        response.status(204).json({message:'error'});
    }
    next();
}

export {TEMP_SESSION2};