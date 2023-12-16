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
                // var result = await axios.post("localhost:3000/getotp",action.payload); 
                console.log("Result 1 : ",result);
            }catch(error){
                console.log("error in getOtp userSlice : ",error);
            }
        },
    }
});

export const getOtp = async (user)=>{  
    try{
        console.log(user);
        var result = await axios.post(REQUESTED_URL+"/getotp",user); 
        // var result = await axios.post("localhost:3000/getotp",action.payload); 
        console.log("Result 1 : ",result);
    }catch(error){
        console.log("error in getOtp userSlice : ",error);
    }
}

// export const {getOtp} = commonSlice.actions;
export default commonSlice.reducer;