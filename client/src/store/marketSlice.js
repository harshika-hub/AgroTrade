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
    try {
        var obj = await axios.post(USER_REQUESTED_URL + `/getCartitems`, cartObj);
        console.log("inside getCart thunk", obj.data);
        return obj.data;
    } catch (err) {
        console.error("Error in getCart thunk:", err);
        throw err; // Re-throw the error to let it propagate to the calling code
    }

});
export const addTocart=createAsyncThunk("userSlice/addTocart",async(cartObj)=>{
    try{
        var obj=await axios.post(USER_REQUESTED_URL+`/addTocart`,cartObj);
        console.log("inside addCart thunk",obj);
        return obj.data;
    }catch(err){
        console.log("Error in add cart thunk");
        throw err;
    }
   

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
            console.log("action in reducer getCart",action);
            state.cartItem=([...action.payload]);


        }).addCase(addTocart.fulfilled,(state,action)=>{
            console.log("action in reducer addToCart",action.payload);


        }) 
        .addDefaultCase((state, action) => {
        });;
    },
    reducers:{
        market:(state,action)=>{

        }
    }

});
export default marketSlice.reducer;
