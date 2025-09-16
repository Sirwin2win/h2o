import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items:[],
    totalCount:0,
    totalAmount:0
}


const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart : (state, action)=>{
            const index = state.items.findIndex(item=> item.id === action.payload.id)
            if(index >0){
                state.items[index].quantity += 1
            }else{
                const newItem = {...action.payload, quantity:1}
                state.items.push(newItem)
                state.totalCount +=1
            }
            state.totalAmount += action.payload.price

        },
        incrementQuantity: (state, action) => {
          state.items = state.items.map((item)=>{
            if(item.id===action.payload){
                return {...item, amount:item.amount +1}
            }
            return item
          })
        },
        decrementQuantity: (state, action) => {
             const index = state.items.findIndex((item) => item.id === action.payload.id);
            if (state.items[index].quantity === 1) {
                state.items[index].quantity = 1
            } else {
                state.items[index].quantity -=1;
            }
        },
        removeItem: (state, action) => {
            state.items= state.items.filter((item) => item.id !== action.payload.id);
        },

        getCartTotal:(state)=>{
            let {totalAmount, totalCount} = state.items.reduce(
                (cartTotal, cartItem)=>{
                    const {price , amount}=cartItem
                    const itemTotal = price * amount
                    cartTotal.totalAmount +=itemTotal
                    cartTotal.totalCount +=amount
                    return cartTotal 
                },
                {totalAmount:0, totalCount:0}
            )
            state.totalAmount = parseInt(totalAmount.toFixed(2))
            state.totalCount = totalCount
        }
    }
})

export const {addToCart, incrementQuantity, decrementQuantity, removeItem} = cartSlice.actions
export default cartSlice.reducer