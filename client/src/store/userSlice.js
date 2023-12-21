import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import { REQUESTED_URL } from '../urls.js';

const initialState = {
    user_Data :{}
}

const userSlice = createSlice({
    name : 'userSlice',
    initialState,
    reducers:{
        userRegister : async(state,action)=>{
            try{
                console.log("insede userRegister in userSlice : ",action.payload);
                var result  = await axios.post(REQUESTED_URL+"/userregistration", action.payload);
                console.log("Result :" ,result);
            }catch(error){
                console.log("Error in useRregister in userSlice : ",error);
            }
        },
        userLogin : async(state,action)=>{
            try{
                console.log("inside userLogin in userSlice : ",action.payload);
                var result  = await axios.post(REQUESTED_URL+"/userLogin", action.payload);
                console.log("Result :" ,result);
            }catch(error){
                console.log("Error in userLogin in userSlice : ",error);
            }
        },
        

    }
});

export const check =  async(payload)=>{
    try{
        console.log("inside check in userSlice : ",payload);
        var result  = await axios.post(REQUESTED_URL+"/check", payload);
        console.log("Result :" ,result);
        return result.data;
    }catch(error){
        console.log("Error in check in userSlice : ",error);
    }
}

export const change =  async(payload)=>{
    try{
        console.log("inside change in userSlice : ",payload);
        var result  = await axios.post(REQUESTED_URL+"/change", payload);
        console.log("Result :" ,result);
        return result.data;
    }catch(error){
        console.log("Error in change in userSlice : ",error);
    }
}

export const {userRegister,userLogin} = userSlice.actions;
export default userSlice.reducer;