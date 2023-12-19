import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { REQUESTED_URL } from '../urls.js';

const initialState = {
    userData: {},
    SignStatus: "false"

}

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        userRegister: async (state, action) => {
            try {
                console.log("insede userRegister in userSlice : ", action.payload);
                var result = await axios.post(REQUESTED_URL + "/userregistration", action.payload);
                console.log("Result  in userReg slice:", result);
                if (result.status == 200) {
                    state.SignStatus = "true";
                    state.userData = action.payload;

                }
                else
                {
                    state.SignStatus = false;
                    state.userData={};

                }

            } catch (error) {
                console.log("Error in useRregister in userSlice : ", error);
            }
        },
        userLogin: async (state, action) => {
            try {
                console.log("inside userLogin in userSlice : ", action.payload);
                var result = await axios.post(REQUESTED_URL + "/userLogin", action.payload);
                console.log("Result :", result);

            } catch (error) {
                console.log("Error in userLogin in userSlice : ", error);
            }
        }

    }
});

export const { userRegister, userLogin } = userSlice.actions;
export default userSlice.reducer;