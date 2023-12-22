import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    adminData:{}
}

const adminSlice = createSlice({
    name:"adminSlice",
    initialState,
    reducers:{
        setAdminData : (state,action)=>{
            const admin = action.payload;
            state.adminData = admin; 

        }
    }
});



export const {setAdminData} = adminSlice.actions;
export default adminSlice.reducer;