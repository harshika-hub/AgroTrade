import {configureStore} from '@reduxjs/toolkit';
import userSlice from './userSlice.js';
import orgSlice from './organisationSlice.js';

export default configureStore({
    reducer:{
        userSlice : userSlice,
        orgSlice:orgSlice
    }
});