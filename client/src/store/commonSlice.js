import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import { REQUESTED_URL } from '../urls.js';
import jscookie from 'js-cookie';


const initialState = {
    role : '',
    status : false
}

const commonSlice = createSlice({
    name : "commonSlice",
    initialState,
    reducers :{
        setRoleStatus : (state,action)=>{
            state.role = action.payload.role;
            state.status = action.payload.status
            // localStorage.setItem('role',JSON.stringify(state.role))
            // localStorage.setItem('status',JSON.stringify(state.status))
        },
        setRoleStatusOnReload : (state,action)=>{
            // const role = JSON.parse(localStorage.getItem("role"));
            // const status = JSON.parse(localStorage.getItem("status"));
            // state.role = role;
            // state.state = status;
        }
        // getOtp : async (state,action)=>{  
        //     try{
        //         console.log("Pauload inside commonSlice getOtp : ",action.payload);
                
        //         var result = await axios.post(REQUESTED_URL+"/getotp",action.payload); 
        //         console.log("commonSlice getOtp Result : ",result);
        //     }catch(error){
        //         console.log("error in getOtp commonSlice : ",error);
        //     }
        // },
        // jwtVerification : async(state,action)=>{
        //     try{
        //         console.log("Token Inside commonSlice jwtVerification : ",action.payload);
        //         var token = jscookie.get();
        //         console.log("token :", token);
        //         var result = await axios.post(REQUESTED_URL+"/",token);
        //         console.log("commonSlice jwtVerification Result : ",result);
        //         return result.data.logData;
        //     }catch(error){
        //         console.log("error in jwtVerification commonSlice : ",error);
        //     }
        // }
    }
});

export const getOtp = async (payload)=>{  
    try{
        console.log("Pauload inside commonSlice getOtp : ",payload);
        
        var result = await axios.post(REQUESTED_URL+"/getotp",payload); 
        console.log("commonSlice getOtp Result : ",result);
    }catch(error){
        console.log("error in getOtp commonSlice : ",error);
    }
};

export const jwtVerification = async()=>{
    try{
        var token = jscookie.get();
        console.log("token :", token);
        var result = await axios.post(REQUESTED_URL+"/",token);
        console.log("commonSlice jwtVerification Result : ",result);
        return result.data.logData;
    }catch(error){
        console.log("error in jwtVerification commonSlice : ",error);
    }
}

export const {setRoleStatus,setRoleStatusOnReload} = commonSlice.actions;
// export const {getOtp,jwtVerification} = commonSlice.actions;
export default commonSlice.reducer;