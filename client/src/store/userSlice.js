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
        getOtp : async(state,action)=>{
            try{
                var result = await axios.post(REQUESTED_URL+'/getotp',action.payload);
                console.log("Result 1 :" ,result);
            }catch(error){
                console.log("Error in getOtp userSlice : ",error);
            }
        },
        register : async(state,action)=>{
            try{
                var result  = await axios.post(REQUESTED_URL+'/register', action.payload);
                console.log("Result 2 :" ,result);
            }catch(error){
                console.log("Error kin register userSlice : ",error);
            }
        }
    }
});

export const {getOtp} = userSlice.actions;
export default userSlice.reducer;