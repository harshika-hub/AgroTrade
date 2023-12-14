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
                console.log(action.payload);
                var result = await axios.post(REQUESTED_URL+"/getotp",action.payload); 
                console.log("Result 1 : ",result);
            }catch(err){
                console.log("error in getOtp userSlice : ",err);
            }
        },
    }
});


export const {getOtp} = commonSlice.actions;
export default commonSlice.reducer;