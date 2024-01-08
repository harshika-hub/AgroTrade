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
export const getUserController=async(req,res)=>{
    console.log("ooooooooooooooo",req.body)
    try
    {
        const userData=await users.aggregate([{$match:{email:req.body.email}}]);
        console.log(userData);
        res.status(200).json(userData);
    }catch(err){
        console.log("error while getting user",err)
        res.status(500).json({msg:"err while fetching user"})
    }
   

}
export const updateProfileController=async(req,res)=>{
    req.body.image=req.file.filename;
    req.body.user_status=true;
    console.log("user data in update user router",req.body);
    try
    {
        const res=await users.findOneAndUpdate({email:req.body.email},{$set:req.body});
        console.log("res in complete user",res)

    }catch(err){
        console.log("err while completing profile",err);

        
    }


    

}