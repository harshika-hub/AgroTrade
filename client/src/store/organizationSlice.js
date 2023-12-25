import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import {REQUESTED_URL } from '../urls.js';
import jscookie from 'js-cookie';

const initialState = {
    orgData: {}
}

const organizationSlice = createSlice({
    name: 'orgSlice',
    initialState,
    reducers: {
        setOrgData : (state,action)=>{
            const org = action.payload;
            state.orgData = org;
        }
    }
});

export const orgRegister = async (payload) => {
    console.log("Payload inside orgRegister in orgSlice : ", payload);
    try {
        var result = await axios.post(REQUESTED_URL + '/organizationregistration',payload);
        console.log("Result : ", result);
        if(result.data.message=="success"){
            jscookie.set('token',result.data.token,{expires:1});
        }
        return result.data;
    } catch (error) {
        console.log("Error in orgRegister in orgSlice : ", error);
    }
}

export const orgLogin = async(payload)=>{
    try{
        console.log("inside orgLogin in orgSlice : ",payload);
        var result  = await axios.post(REQUESTED_URL+"/organizationlogin",payload);
        console.log("Result :" ,result);
        if(result.data.message=="seccess"){
            jscookie.set('token',result.data.token,{expires:1});
        }
        return result.data.logData;
    }catch(error){
        console.log("Error in orgLogin in orgSlice : ",error);
    }
}


export const { setOrgData } = organizationSlice.actions;
// export const { orgRegister,orgLogin } = organizationSlice.actions;
export default organizationSlice.reducer;