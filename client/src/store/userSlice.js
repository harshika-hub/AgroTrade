import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import { REQUESTED_URL } from '../urls.js';
import { USER_REQUESTED_URL } from '../urls.js';
import jscookie from 'js-cookie';
import { createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    userData :{}
}
export const getDataonLoad=createAsyncThunk("userSlice/getDataonLoad",async(detailObj)=>{
    var obj=await axios.post(USER_REQUESTED_URL+`/getUser`,detailObj);
    console.log(obj.data[0].email);
    return obj.data[0];

})
// export const completeProfile=createAsyncThunk("userSlice/completeProfile",async(profileData)=>{
//     console.log("form data in complete thunk",profileData)
//     var result=await axios.post(USER_REQUESTED_URL+"/updateUser",profileData);
//     return result;
// })

const userSlice = createSlice({
    name : 'userSlice',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getDataonLoad.fulfilled,(state,action)=>{
            console.log("inside getDataOnload reducer",action.payload);
            state.userData=action.payload;
        });
           },
    reducers:{
        setUserData :(state,action)=>{
            const user = action.payload;
            state.userData = user;
            // console.log(state.userData);
            // localStorage.setItem('userData',JSON.stringify(state.userData));
            console.log("user data inside user reducer",user);
        },
        
        setStateOnReload: (state,action)=>{
            console.log(state);
            // const userslice = JSON.parse(localStorage.getItem("userData"));
            // console.log("user Slice : ",userslice);
            // state.userData = userslice;
        }
        }
});

export const completeProfile=async(profileData)=>{
    console.log("form data in complete thunk",profileData)
    try{
        var result=await axios.post(USER_REQUESTED_URL+"/updateUser",profileData);
        return result;
    }catch(err){
            console.log("error inside complete profile",err);
    }

}


export const userRegister = async(payload)=>{
    try{
        console.log("insede userRegister in userSlice : ",payload);
        var result  = await axios.post(REQUESTED_URL+"/userregistration", payload);
        console.log("Result :" ,result);
        if(result.data.message=="seccess"){
            jscookie.set('token',result.data.token,{expires:1});
        }
        return result.data.logData;
    }catch(error){
        console.log("Error in useRregister in userSlice : ",error);
    }
};

// export const userLogin = async(payload)=>{
//     try{
//         console.log("inside userLogin in userSlice : ",payload);
//         var result  = await axios.post(REQUESTED_URL+"/userlogin", payload);
//         console.log("Result :" ,result);
//         if(result.data.message=="seccess"){
//             jscookie.set('token',result.data.token,{expires:1});
//         }
//         return result.data.logData;
//     }catch(error){
//         console.log("Error in userLogin in userSlice : ",error);
//     }
// }

export const userLogin = async(payload)=>{
    try{
        console.log("inside userLogin in userSlice : ",payload);
        var result  = await axios.post(REQUESTED_URL+"/userlogin", payload);
        console.log("Result :" ,result);
        if(result.data.message=="success"){
            jscookie.set('token',result.data.token,{expires:1});
        }
        return result.data;
    }catch(error){
        console.log("Error in userLogin in userSlice : ",error);
    }
}

export const checkOtp =  async(payload)=>{
    try{
        console.log("inside check in userSlice : ",payload);
        var result  = await axios.post(REQUESTED_URL+"/checkotp",payload);
        console.log("Result : " ,result);
        return result.data;
    }catch(error){
        console.log("Error in check in userSlice : ",error);
    }
}

export const changePassword =  async(payload)=>{
    try{
        console.log("inside change in userSlice : ",payload);
        var result  = await axios.post(REQUESTED_URL+"/changepassword", payload);
        console.log("Result :" ,result);
        return result.data;
    }catch(error){
        console.log("Error in change in userSlice : ",error);
    }
}

export const addGrain = async(payload)=>{
    console.log("Grains",payload);
    try{
        var result  = await axios.post(USER_REQUESTED_URL+"/grainInsert",payload);
        console.log("result",result);
        return result.data
    }catch(error){
        console.log("error sendData");
    }
}

// export const getDataGrains = async(payload)=>{
//     console.log("email11111");
//     try{
//         var result  = await axios.get(USER_REQUESTED_URL+"/getGrain",payload);
//         // console.log("result",result);
//         // return result.data
//     }catch(error){
//         console.log("error sendData");
//     }
// }

export const {setUserData} = userSlice.actions;
// export const {userRegister,userLogin} = userSlice.actions;
export default userSlice.reducer;