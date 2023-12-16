import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import { REQUESTED_URL } from '../urls.js';

const initialState = {

}

const commonSlice = createSlice({
    name : "commonSlice",
    initialState,
    reducers :{
        getOtp : async (state,action)=>{  
            try{
                console.log("Pauload inside commonSlice getOtp : ",action.payload);
                var result = await axios.post(REQUESTED_URL+"/getotp",action.payload); 
                console.log("commonSlice getOtp Result : ",result);
            }catch(error){
                console.log("error in getOtp commonSlice : ",error);
            }
        },
    }
});

export const {getOtp} = commonSlice.actions;
export default commonSlice.reducer;