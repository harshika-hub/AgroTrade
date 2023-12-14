// import { request } from 'http';
// import users from '../models/userModel.js';
import { request,response } from 'express';
import { sendMail } from '../middleware/nodeMailer.js';

export const indexGetOtpController = (request,response)=>{
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
        console.log(request.session);
        request.session.email = request.body.email;
        request.session.password = request.body.password;
        request.session.otp = otp;
        request.session.save();
        console.log("Email Sended Successfully. Otp : ",otp);
    }catch(error){
        console.error("Error while sending Email : ",error);
    }
}