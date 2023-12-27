import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import { USER_REQUESTED_URL,REQUESTED_URL } from '../urls.js';
import jscookie from 'js-cookie';

const initialState = {
    userData :{}
}

const userSlice = createSlice({
    name : 'userSlice',
    initialState,
    reducers:{
        setUserData :(state,action)=>{
            const user = action.payload;
            state.userData = user;
        }
    }
});


export const userRegister = async(payload)=>{
    try{
        console.log("insede userRegister in userSlice : ",payload);
        var result  = await axios.post(REQUESTED_URL+"/userregistration", payload);
        console.log("Result :" ,result);
        if(result.data.message=="success"){
            jscookie.set('token',result.data.token,{expires:1});
        }
        return result.data;
    }catch(error){
        console.log("Error in useRregister in userSlice : ",error);
    }
};

export const userLogin = async(payload)=>{
    try{
        console.log("inside userLogin in userSlice : ",payload);
        var result  = await axios.post(REQUESTED_URL+"/userlogin", payload);
        console.log("Result :" ,result);
        if(result.data.message=="success"){
            jscookie.set('token',result.data.token,{expires:1});
        }
        return result.data;
    }catch(error){
        console.log("Error in userLogin in userSlice : ",error);
    }
}

export const checkOtp =  async(payload)=>{
    try{
        console.log("inside check in userSlice : ",payload);
        var result  = await axios.post(REQUESTED_URL+"/checkotp",payload);
        console.log("Result : " ,result);
        return result.data;
    }catch(error){
        console.log("Error in check in userSlice : ",error);
    }
}

export const changePassword =  async(payload)=>{
    try{
        console.log("inside change in userSlice : ",payload);
        var result  = await axios.post(REQUESTED_URL+"/userchangepassword", payload);
        console.log("Result :" ,result);
        return result.data;
    }catch(error){
        console.log("Error in change in userSlice : ",error);
    }
}

// export const temp = async()=>{
//     try{
//         var result  = await axios.get(USER_REQUESTED_URL+"/");
//         console.log(result);
//     }catch(error){
//         console.log("error whiler temp trial");
//     }
// }

export const {setUserData} = userSlice.actions;
export default userSlice.reducer;