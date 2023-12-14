// import { request } from 'http';
// import users from '../models/userModel.js';
// import organisations from "../models/organisationModel";
// import express from 'express';
import { sendMail } from '../middleware/nodeMailer.js';

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
        request.session.email = email;
        request.session.password = request.body.password;
        request.session.otp = otp;
        console.log("Email Sended Successfully. Otp : ",otp);
    }catch(error){
        console.error("Error while sending Email : ",error);
    }
}

export const organisationsSignUpController = async(request,response)=>{
    console.log("request.body",request.body);
    var image = request.files['org_image'][0];
    console.log("image",image);

}