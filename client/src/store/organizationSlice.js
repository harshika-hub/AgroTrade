import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import {REQUESTED_URL } from '../urls';
const initialState = {
    org_Data: {}
}

const organisationSlice = createSlice({
    name: 'orgSlice',
    initialState,
    reducers: {
        // getOtp : async(state,action)=>{
        //     try{
        //         var result = await axios.post(REQUESTED_URL+'/getotp',action.payload);
        //         console.log("Result 1 :" ,result);
        //     }catch(error){
        //         console.log("Error in getOtp userSlice : ",error);
        //     }
        // },
        // register : async(state,action)=>{
        //     try{
        //         var result  = await axios.post(REQUESTED_URL+'/register', action.payload);
        //         console.log("Result 2 :" ,result);
        //     }catch(error){
        //         console.log("Error kin register userSlice : ",error);
        //     }
        // }

        orgRegister : async (state,action) => {
            console.log("inside orgRegister",action.payload);
            try {
                 var response = await axios.post(REQUESTED_URL+'/organisationRegister',action.payload);
            } catch (err) {
                console.log("err", err);
            }
        }
    }
});
// export const orgRegister = async (organisation) => {
//     console.log("inside orgRegister");
//     try {
//          var response = await axios.post(REQUESTED_URL+'/organisationRegister',organisation);
//     } catch (err) {
//         console.log("err", err);
//     }
// }


export const {orgRegister} = organisationSlice.actions;
export default organisationSlice.reducer;