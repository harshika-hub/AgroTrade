import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    email:{
        type : String,
        required : true,
        unique : true
    },
    passsword:{
        type : String,
        required : true
    }
});

const users = mongoose.model('users',userModel,'users');
export default users;