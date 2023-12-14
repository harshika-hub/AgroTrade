import {configureStore} from '@reduxjs/toolkit';
import userSlice from './userSlice.js';
import commonSlice from './commonSlice.js';
import orgSlice from './organizationSlice.js';

export default configureStore({
    reducer:{
        userSlice : userSlice,
        commonSlice : commonSlice,
        orgSlice:orgSlice
    }
});