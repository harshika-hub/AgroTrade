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
        type:String
    },
    address:String,
    contact:Number,
    state:String,
    city:String,
    education:String,
    experience:String,
    consultancy_fee_video:Number,
    consultancy_fee_chat:Number,
    consultancy_type:String,
    consultancy_feild:String,
    certificate:String,
    expert_rating:String,
    expert_status:{
        type:Boolean,
        default:false
    },
    user_status:Boolean


});

const users = mongoose.model('users',userModel,'users');
export default users;