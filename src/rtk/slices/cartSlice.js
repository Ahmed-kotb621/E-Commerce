import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    initialState:[],
    name:"cartSlice",
    reducers:{
        addToCart:(state,action)=>{
            state.push(action.payload);
        },
        removeFromCart:(state,action)=>{},
        clearCart:(state)=>{}
    }
});

export const {addToCart,removeFromCart,clearCart} = cartSlice.actions;
export default cartSlice.reducer;