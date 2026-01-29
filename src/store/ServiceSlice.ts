import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Service } from "../types";

type ServicesState =  Service[];


const initialState: ServicesState =[];

const serviceSlice= createSlice({
    name: 'services',
    initialState,
    reducers:{
        setServices:(_, action:PayloadAction<Service[]>)=>{
            return action.payload;
        }
    }


})


export const {setServices}= serviceSlice.actions;
console.log('serviceSlice',serviceSlice)
export default serviceSlice.reducer;