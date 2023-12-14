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
        getOtp : async (state,action)=>{  
            try{
                console.log(action.payload);
                // var result = await axios.post('http://localhost:3000/user/getotp',action.payload); 
                var result = await axios.post(REQUESTED_URL+"/getotp",action.payload); 
                console.log("recruiterSlice : ",result);
            }catch(err){
                console.log("error in recruiterSlice : ",err);
            }
        },
        register : async(state,action)=>{
            try{
                var result  = await axios.post('http://localhost:3000/user/getotp', action.payload);
                console.log("Result 2 :" ,result);
            }catch(error){
                console.log("Error in register userSlice : ",error);
            }
        }
    }
});

export const {getOtp,register} = userSlice.actions;
export default userSlice.reducer;