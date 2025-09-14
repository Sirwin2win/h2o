import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items:[],
    totalQuantity:0,
    totalAmount:0
}


const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart : (state, action)=>{
            const index = state.items.findIndex(item=> item.id === action.payload.id)
            if(index >-0){
                state.items[index].quantity += 1
            }else{
                const newItem = {...action.payload, quantity:1}
                state.items.push(newItem)
                state.totalQuantity +=1
            }
            state.totalAmount += action.payload.price

        }
    }
})

export const {addToCart} = cartSlice.actions
export default cartSlice.reducer