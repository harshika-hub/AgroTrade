import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { USER_REQUESTED_URL } from "../urls.js";
import axios from "axios";
// import jscookie from 'js-cookie'
export const EquipmentMarket=createAsyncThunk('marketSlice/EquipmentMarket',async(token)=>{
    try{
        var equipment=await axios.get(USER_REQUESTED_URL+'/marketEquipment/'+token);
        return equipment.data.equipment;

    }catch(err){
        console.log("Error in Equipment thunk",err);
    }

});

export const LandMarket=createAsyncThunk('marketSlice/LandMarket',async(token)=>{
    try{
        var Land=await axios.get(USER_REQUESTED_URL+'/marketLand/'+token);
        return Land.data.agriLand;

    }catch(err){
        console.log("Error in Land thunk",err);
    }

})

export const storageMarket=createAsyncThunk('marketSlice/storageMarket',async(token)=>{
    try{
        var storage=await axios.get(USER_REQUESTED_URL+'/marketStorage/'+token);
        return storage.data.storage;

    }catch(err){
        console.log("Error in storage thunk",err);
    }

})

export const getCart=createAsyncThunk("userSlice/getCart",async(cartObj)=>{
    var obj=await axios.post(USER_REQUESTED_URL+`/getCartitems`,cartObj);
    console.log("inside getCart thunk",obj.data[0].email);
    return obj.data[0];

});
export const addTocart=createAsyncThunk("userSlice/addTocartt",async(cartObj)=>{
    var obj=await axios.post(USER_REQUESTED_URL+`/addTocart`,cartObj);
    console.log("inside getCart thunk",obj.data[0].email);
    return obj.data[0];

})


const marketSlice=createSlice({
    name:'marketSlice',
    initialState:{
         equipment:[],
         agriLand:[],
         storage:[],
         cartItem:[]


    },
    extraReducer:(builder)=>{
        builder.addCase(EquipmentMarket.fulfilled,(state,action)=>{
            console.log("Equipment in reducer",action.payload);
            state.equipment=action.payload;

        }).addCase(LandMarket.fulfilled,(state,action)=>{
            console.log("Land in reducer",action.payload);
            state.agriLand=action.payload;

        }).addCase(storageMarket.fulfilled,(state,action)=>{
            console.log("storagein reducer",action.payload);
            state.storage=action.payload;

        }).addCase(getCart.fulfilled,(state,action)=>{
            console.log("action in reducer getCart",action.payload);
            state.cartItem=action.payload;


        }).addCase(addTocart.fulfilled,(state,action)=>{
            console.log("action in reducer addToCart",action.payload);


        });
    },
    reducers:{
        market:(state,action)=>{

        }
    }

});
export default marketSlice.reducer;
