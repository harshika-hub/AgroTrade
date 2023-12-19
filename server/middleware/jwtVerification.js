import jwt from 'jsonwebtoken';
import organisations from '../models/organizationModel.js';
import admin from '../models/adminModel.js';
import users from '../models/userModel.js';
import dotenv from 'dotenv';

dotenv.config();
export const aunthicateJWT = (request,response,next)=>{
    console.log('inside authenticateJWT');
    try{
        const SECRET_KEY = process.env.JWT_SECRET_KEY;
        const TOKEN = request.body.token;
        console.log(request.cookies);
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
            var loggedUser = await users.findOne({ email: request.payload.data.email });
            if (loggedUser) {
                response.status(200).json({});
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
            var loggedOrg = await organisations.findOne({ email: request.payload.data.email });
            if(loggedOrg){
                response.status(200).json({});
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
            var loggedAdmin = await admin.findOne({ email: request.payload.data.email });
            if(loggedAdmin){
                response.status(200).json({});
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