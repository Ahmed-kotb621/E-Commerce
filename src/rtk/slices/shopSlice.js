import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchShopProducts = createAsyncThunk("shopSlice/fetchShopProducts",async ()=>{
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
})

export const shopSlice=createSlice({
    initialState:[],
    name:"shopSlice",
    reducers:{},
    extraReducers:(builder)=>{
            builder.addCase(fetchShopProducts.fulfilled,(state,action)=>{
                return action.payload;
            });

    }
});

export const {}=shopSlice.actions;
export default shopSlice.reducer;