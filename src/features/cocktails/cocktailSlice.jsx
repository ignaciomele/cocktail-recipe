import { createSlice } from "@reduxjs/toolkit";
import cocktails from "../../mockupData/cocktails";


export const cocktailSlice = createSlice({
    name: 'user',
    initialState: cocktails,
    reducers: {
        
    }
})

export default cocktailSlice.reducer