

import {createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const initialState={value:0,userName:[]};


export const fetchApi=createAsyncThunk("fetchApi",
async()=>{
    const response=await fetch("https://randomuser.me/api/").then(
        (res)=>{return res.json()}
    ).then(
        (data)=>{return data.results[0].name.first}
    )
    return response; 
}) 

export const apiState=createSlice({
    name:'api',
    initialState,
    reducers:{
       clickValue(state){
        state.value++
       },
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchApi.fulfilled,(state,action)=>{
           state.userName.push(action.payload)
        })
    }
})
export const {clickValue}=apiState.actions;
export default apiState.reducer;