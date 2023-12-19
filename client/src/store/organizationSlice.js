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
            console.log("Payload inside orgRegister in orgSlice : ", action.payload.org_image);
            console.log("images ")
            try {
                var result = await axios.post(REQUESTED_URL + '/organizationregistration',action.payload);
                console.log("Result : ", result);
            } catch (error) {
                console.log("Error in orgRegister in orgSlice : ", error);
            }
        }
    }
});

export const { orgRegister } = organizationSlice.actions;
export default organizationSlice.reducer;