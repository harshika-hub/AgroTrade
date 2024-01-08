import mongoose from "mongoose";

const orgModel = new mongoose.Schema({
    org_email:{
        type : String,
        required : true,
        unique : true
    },
    password:{
        type : String,
        required : true
    },
    owner_name:{
        type : String,
        required : true
    },
    dealer_name:{
        type : String,
        required : true
    },
    dealer_email:{
        type : String,
        required : true
    },
    dealer_contact:{
        type: Number,
        required: true,
    },
    company_name:{
        type : String,
        required : true
    },
    address:{
        type : String,
        required : false
    },
    city:{
        type : String,
        required : true
    },
    state:{
        type : String,
        required : true
    },
    zip_code:{
        type: Number,
        required: true,
    },
    reg_number:{
        type: String,
        unique:true,
        required: true,
    },
    org_image:{
        type: String,
        required : true
    },
    org_description:{
        type : String,
        required : true
    },
    org_type:{
        type : String,
        required : true
    },
    reg_name:{
        type : String,
        required : true
    }
});

const organisations = mongoose.model('organisations',orgModel,'organisations');
export default organisations;