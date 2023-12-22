import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import { REQUESTED_URL } from '../urls.js';
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
            // console.log(state.userData);
            // localStorage.setItem('userData',JSON.stringify(state.userData));
        },
        setStateOnReload: (state,action)=>{
            console.log(state);
            // const userslice = JSON.parse(localStorage.getItem("userData"));
            // console.log("user Slice : ",userslice);
            // state.userData = userslice;
        }
        // userRegister : async(state,action)=>{
        //     try{
        //         console.log("insede userRegister in userSlice : ",action.payload);
        //         var result  = await axios.post(REQUESTED_URL+"/userregistration", action.payload);
        //         console.log("Result :" ,result);
        //         if(result.data.message=="seccess"){
        //             jscookie.set('token',result.data.token,{expires:1});
        //         }
        //         return result.data.logData;
        //     }catch(error){
        //         console.log("Error in useRregister in userSlice : ",error);
        //     }
        // },
        // userLogin : async(state,action)=>{
        //     try{
        //         console.log("inside userLogin in userSlice : ",action.payload);
        //         var result  = await axios.post(REQUESTED_URL+"/userlogin", action.payload);
        //         console.log("Result :" ,result);
        //         if(result.data.message=="seccess"){
        //             jscookie.set('token',result.data.token,{expires:1});
        //         }
        //         return result.data.logData;
        //     }catch(error){
        //         console.log("Error in userLogin in userSlice : ",error);
        //     }
        // }
    }
});


export const userRegister = async(payload)=>{
    try{
        console.log("insede userRegister in userSlice : ",payload);
        var result  = await axios.post(REQUESTED_URL+"/userregistration", payload);
        console.log("Result :" ,result);
        if(result.data.message=="seccess"){
            jscookie.set('token',result.data.token,{expires:1});
        }
        return result.data.logData;
    }catch(error){
        console.log("Error in useRregister in userSlice : ",error);
    }
};

export const userLogin = async(payload)=>{
    try{
        console.log("inside userLogin in userSlice : ",payload);
        var result  = await axios.post(REQUESTED_URL+"/userlogin", payload);
        console.log("Result :" ,result);
        if(result.data.message=="seccess"){
            jscookie.set('token',result.data.token,{expires:1});
        }
        return result.data.logData;
    }catch(error){
        console.log("Error in userLogin in userSlice : ",error);
    }
}

export const checkOtp =  async(payload)=>{
    try{
        console.log("inside check in userSlice : ",payload);
        var result  = await axios.post(REQUESTED_URL+"/checkotp",{payload});
        console.log("Result :" ,result);
        return result.data;
    }catch(error){
        console.log("Error in check in userSlice : ",error);
    }
}

export const changePassword =  async(payload)=>{
    try{
        console.log("inside change in userSlice : ",payload);
        var result  = await axios.post(REQUESTED_URL+"/changepassword", payload);
        console.log("Result :" ,result);
        return result.data;
    }catch(error){
        console.log("Error in change in userSlice : ",error);
    }
}

export const {setUserData,setStateOnReload} = userSlice.actions;
// export const {userRegister,userLogin} = userSlice.actions;
export default userSlice.reducer;