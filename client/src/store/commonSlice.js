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
        }
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

export const jwtVerification = async(token)=>{
    try{
        var token = jscookie.get('token');
        console.log("token :", token);
        var result = await axios.post(REQUESTED_URL+"/",{token});
        console.log("commonSlice jwtVerification Result : ",result);
        return result.data.logData;
    }catch(error){
        console.log("error in jwtVerification commonSlice : ",error);
    }
}

export const {setRoleStatus,setRoleStatusOnReload} = commonSlice.actions;
// export const {getOtp,jwtVerification} = commonSlice.actions;
export default commonSlice.reducer;