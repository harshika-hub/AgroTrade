import { request } from "express";
import messagesModal from "../models/messageModal.js";

export const addMessageController =async(request,response)=>{
    const {chatId,senderId,text}=request.body;
    const message= new messagesModal({
        chatId,
        senderId,
        text
    })
    try {
        const result=await message.save()
        const messages =await messagesModal.find({chatId})
        response.status(200).json(messages)
        
    } catch (error) {
        response.status(500).json(error)
    }
}


export const getMessagesController =async(request,response)=>{
    const {chatId}=request.params;
    console.log("This is the chat is "+chatId);
    try {
        const result =await messagesModal.find({chatId})
        console.log(result);
        response.status(200).json(result)
        
    } catch (error) {
        response.status(500).json(error);
    }

}