import users from "../models/userModel.js";
export const newExpertController= async(req,res)=>{
    // req.body.certificate=req.file.filename;
    const {experience,education,consultancy_field,consultancy_type,consultancy_fee_video,consultancy_fee_chat,email}=req.body
    const updateUser = {
        experience,
        education,
        consultancy_field,
        consultancy_type,
        certificate:req.file.filename,
        expert_status:true
    };

    // Check if consultancy_fee_video exists in req.body, then add it to updateUser
    if (consultancy_fee_video !== undefined) {
        updateUser.consultancy_fee_video = consultancy_fee_video;
    }

    // Check if consultancy_fee_chat exists in req.body, then add it to updateUser
    if (consultancy_fee_chat !== undefined) {
        updateUser.consultancy_fee_chat = consultancy_fee_chat;
    }
    try{
        console.log("body data in expert Controller",req.body);
        console.log("image",req.file)
        const user = await users.findOneAndUpdate({email:email}, updateUser, { new: true });

console.log("updated expert ",user);
        res.status(201).json({msg:"Expert Details updated"})
    }catch(err){
        console.log("error in expertController",err)
        res.status(500).json({msg:"Error While updating User"})
    }
   
}