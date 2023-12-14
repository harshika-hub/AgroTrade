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
        register : async(state,action)=>{
            try{
                var result  = await axios.post(REQUESTED_URL+"/userRegistration", action.payload);
                console.log("Result 2 :" ,result);
            }catch(error){
                console.log("Error in register userSlice : ",error);
            }
        }

    }
});

export const {getOtp,register} = userSlice.actions;
export default userSlice.reducer;