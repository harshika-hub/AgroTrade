import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    email:{
        type : String,
        required : true,
        unique : true
    },
    password:{
        type : String,
        required : true
    },
    full_name:{
        type : String 
    },
    address:{
        type : String
    },
    contact:{
        type:Number
    },
    state:{
        type : String
    },
    city:{
        type : String
    },
    education:{
        type : String
    },
    experience:{
        type : Number
    },
    certificate:{
        type : String
    },
    consultancy_fee_video:{
        type : Number
    },
    consultancy_fee_chat:{
        type : Number
    },
    consultancy_feild:{
        type : String //DropDown
    },
    expert_rating:{
        type : Number
    },
    // expert_feedbacks:{

    // },
    expert_status:{
        type : String
    },
    user_status:{
        type:Boolean
    }


});

const users = mongoose.model('users',userModel,'users');
export default users;