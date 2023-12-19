import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import {REQUESTED_URL } from '../urls.js';

const initialState = {
    org_Data: {}
}

const organizationSlice = createSlice({
    name: 'orgSlice',
    initialState,
    reducers: {
        orgRegister: async (state, action) => {
            console.log("Payload inside orgRegister in orgSlice : ", action.payload);
            try {
                var result = await axios.post(REQUESTED_URL + '/organizationregistration',action.payload);
                console.log("Result : ", result);
            } catch (error) {
                console.log("Error in orgRegister in orgSlice : ", error);
            }
        },
        orgLogin : async(state,action)=>{
            try{
                console.log("inside orgLogin in orgSlice : ",action.payload);
                var result  = await axios.post(REQUESTED_URL+"/organizationlogin", action.payload);
                console.log("Result :" ,result);
            }catch(error){
                console.log("Error in orgLogin in orgSlice : ",error);
            }
        }
    }
});

export const { orgRegister,orgLogin } = organizationSlice.actions;
export default organizationSlice.reducer;