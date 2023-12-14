import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import {REQUESTED_URL } from '../urls.js';
const initialState = {
    org_Data: {}
}

const organisationSlice = createSlice({
    name: 'orgSlice',
    initialState,
    reducers: {
        
        orgRegister : async (state,action) => {
            console.log("inside orgRegister",action.payload);
            try {
                 var response = await axios.post(REQUESTED_URL+'/organisationregister',action.payload);
                //  var response = await axios.post('http://localhost:3000/organisationregister',action.payload);
                 console.log(response);
            } catch (err) {
                console.log("err", err);
            }
        }
    }
});


export const {orgRegister} = organisationSlice.actions;
export default organisationSlice.reducer;