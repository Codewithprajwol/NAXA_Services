import { configureStore } from "@reduxjs/toolkit";
import servicesReducer from "./ServiceSlice";
export const store = configureStore({
    reducer:{
        services: servicesReducer,  
    },
})
console.log('store',store.getState())
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;