import users from '../models/userModel.js';
// import organizations from "../models/organizationModel.js";
import { sendMail } from '../middleware/nodeMailer.js';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

export const indexGetOtpController = (request,response)=>{
    var min = 1000; 
    var max = 9999; 
    var otp = Math.floor(Math.random() * (max - min + 1)) + min;
    var email = request.body.email;
    var subject =  `Welcome to Agrotrade - Your Ultimate Agriculture Solution!`;
    var body = `Thank you for choosing us as your trusted partner for all your Grains and Equipments Need. Our team is dedicated to providing you with a seamless and convenient experience for your Agriculture requirements.
    Your One time Password is ${otp}`;
    var html = '';
    try{
        sendMail(email,subject,body,html);
        console.log(request.session);
        request.session.email = request.body.email;
        request.session.password = request.body.password;
        request.session.otp = otp;
        request.session.save();
        console.log(request.session);
        console.log("Email Sended Successfully. Otp : ",otp);
    }catch(error){
        console.error("Error while sending Email : ",error);
    }
}

export const indexUserRegistrationController = async(request,response)=>{
    console.log(request.body);
    console.log(request.session);
    if(request.session.otp==request.body.otp){
        try{
            const existingUser = await users.findOne({email:request.session.email});
            if(existingUser){
                console.log("User Allready Exist.");
                response.json({status:"exist"});
            }
            else{
                let payload = {};
                const MAX_AGE = 6 * 24 * 60 * 60 * 1000;
                const SECRET_KEY = process.env.JWT_SECRET_KEY;
                payload.data = {
                    email : request.session.email,
                    role : process.env.USER_ROLE
                }

                const EXPIRY_TIME = {
                    expiresIn : '6d'
                }
                var token = jwt.sign(payload,SECRET_KEY,EXPIRY_TIME);
                response.cookie('jwt',token,{httpOnly:true,maxAge:MAX_AGE});
                console.log("JWT cookie saved successfully.");

                var newUser = await users.create({
                    email : request.session.email,
                    passsword : request.session.password
                });

                console.log(newUser);
                console.log("User Registered Successfully");
                response.json({status:"success"});
            }
        }catch(error){

        }
    }else{
        console.log("Invalid Otp.");
        response.json({status:"invalid"});
    }
}

export const indexOrganizationRegistrantionController = async(request,response)=>{
    console.log("request.body",request.body);
    var image = request.files['org_image'][0];
    console.log("image",image);

}