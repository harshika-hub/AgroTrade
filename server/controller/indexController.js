import users from '../models/userModel.js';
import organizations from "../models/organizationModel.js";
import { sendMail } from '../middleware/nodeMailer.js';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import {request,response} from 'express';

dotenv.config();

/* Removable after solving session problem */
    var TEMP_SESSION = {};
    var LOG = {};
/* Removable after solving session problem */

export const indexGetOtpController = async(request,response)=>{
    console.log(request.body);
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
        var hashed_password = await bcrypt.hash(request.body.password,10)  
        // request.session.email = request.body.email;
        // request.session.password = hashed_password;
        // request.session.otp = otp;
        // request.session.save();

        /* Removable after solving session problem */
        TEMP_SESSION.email = email;
        TEMP_SESSION.password = hashed_password;
        TEMP_SESSION.otp = otp;
        /* Removable after solving session problem */

        console.log("Email Sended Successfully. Otp : ",otp);
    }catch(error){
        console.error("Error while sending Email : ",error);
    }
}

export const indexUserRegistrationController = async(request,response)=>{
    console.log(request.body);
    // var email = request.session.email;
    // var password = request.session.password;
    // var real_otp = request.session.otp;
    
    /* Removable after solving session problem */
    var email = TEMP_SESSION.email;
    var password = TEMP_SESSION.password;
    var real_otp = TEMP_SESSION.otp;
    /* Removable after solving session problem */
    
    if(real_otp==request.body.otp){
        try{
            const existingUser = await users.findOne({email:email});
            if(existingUser){
                console.log("User Allready Exist.");
                response.json({message:"exist"});
            }
            else{
                let payload = {};
                const MAX_AGE = 6 * 24 * 60 * 60 * 1000;
                const SECRET_KEY = process.env.JWT_SECRET_KEY;
                payload.data = {
                    email : email,
                    role : process.env.USER_ROLE
                }

                const EXPIRY_TIME = {
                    expiresIn : '6d'
                }
                var token = jwt.sign(payload,SECRET_KEY,EXPIRY_TIME);
                response.cookie('jwt',token,{httpOnly:true,maxAge:MAX_AGE});
                console.log("JWT cookie saved successfully.");
               
                console.log(email,password);
                var newUser = await users.create({
                    email,
                    password
                });
                console.log(newUser);
                console.log("User Registered Successfully");
                LOG.email = newUser.email;
// ..................................................... working start here
                response.json({message:"success"});
            }
        }catch(error){
            console.log("Error while user Registration in indexUserRegistrationController : ",error);
            response.status(204).json({message:'error'})
        }
    }else{
        console.log("Invalid Otp.");
        response.status(204).json({message:"invalid"});
    }
}


export const indexUserLoginController = async (request, response) => {
    try {
        const { email, password } = request.body;
        const existingUser = await users.findOne({ email: email });
        if (existingUser == null) {
            return response.status(202).json({ message: 'Invalid Email Id ' });
        } else {
            const password_status = await bcrypt.compare(password, existingUser.password);
            if (password_status) {
                let payload = {};
                const MAX_AGE = 6 * 24 * 60 * 60 * 1000;
                const SECRET_KEY = process.env.JWT_SECRET_KEY;
                payload.data = {
                    email: email,
                    role: process.env.USER_ROLE
                }

                const EXPIRY_TIME = {
                    expiresIn: '6d'
                }
                var token = jwt.sign(payload, SECRET_KEY, EXPIRY_TIME);
                response.cookie('jwt', token, { httpOnly: true, maxAge: MAX_AGE });
                console.log("Login Successfully");
                
                return response.status(201).json({ message: 'success'});
            }
            else {
                console.log("Password does'nt match");
                return response.status(203).json({ message: 'wrong password' });
            }
        }
    } catch (error) {
        console.log("Error while login in indexUserLoginController :", error);
        return response.status(204).json({ message: 'error' });
    }
}


export const indexOrganizationRegistrantionController = async(request,response)=>{
    console.log(request);
    console.log(request.body);
    console.log(request.body.password);
    if(TEMP_SESSION.otp==request.body.otp){
        try{
            var existingOrg = await organizations.findOne({org_email:request.body.org_email}); 
            if(existingOrg){
                console.log("Organization allready registered.");
                response.status(204).json({message:"exist"});
            }else{
                var hashed_password = await bcrypt.hash(request.body.password,10)  
                var orgData = {
                    ...request.body,
                    password : hashed_password,
                    org_image : request.file.filename
                };
                let payload = {};
                const MAX_AGE = 6 * 24 * 60 * 60 * 1000;
                const SECRET_KEY = process.env.JWT_SECRET_KEY;
                payload.data = {
                    email : request.body.org_email,
                    role : process.env.ORG_ROLE
                }

                const EXPIRY_TIME = {
                    expiresIn : '6d'
                }
                var token = jwt.sign(payload,SECRET_KEY,EXPIRY_TIME);
                response.cookie('jwt',token,{httpOnly:true,maxAge:MAX_AGE});
                console.log("JWT cookie saved successfully.");
               
                var newOrg = await organizations.create(orgData);
                console.log(newOrg);
                console.log("Organization Registered Successfully");
                response.json({message:"success"}); 
            }

        }catch(error){
            console.log("Error while organization registration in indexOrganizationRegistrationController : ",error);
            response.status(204).json({message:"error"})
        }
    }else{
        response.status(204).json({message:'invalid'});
    }
}


export const indexOrganizationLoginController = async (request, response) => {
    try {
        const { org_email, password } = request.body;
        const existingUser = await organizations.findOne({ org_email: org_email });
        if (existingUser == null) {
            return response.status(202).json({ message: 'not exist' });
        } else {
            const password_status = await bcrypt.compare(password, existingUser.password);
            if (password_status) {
                let payload = {};
                const MAX_AGE = 6 * 24 * 60 * 60 * 1000;
                const SECRET_KEY = process.env.JWT_SECRET_KEY;
                payload.data = {
                    org_email: org_email,
                    role: process.env.ORG_ROLE
                }

                const EXPIRY_TIME = {
                    expiresIn: '6d'
                }
                var token = jwt.sign(payload, SECRET_KEY, EXPIRY_TIME);
                response.cookie('jwt', token, { httpOnly: true, maxAge: MAX_AGE });
                console.log("Login Successfully");
                
                return response.status(201).json({ message: 'success'});
            }
            else {
                console.log("Password does'nt match");
                return response.status(203).json({ message: 'wrong password' });
            }
        }
    } catch (error) {
        console.log("Error while login in indexOrgLoginController :", error);
        return response.status(204).json({ message: 'error' });
    }
}


export {LOG};