import { createSlice } from "@reduxjs/toolkit";

// const things = localStorage.getItem('cartItems')
// let QTY = 0
// for(let i =0; i<things.length; i++){
//   QTY += Number(things[i].quantity)
// }

const initialState = {
    // items:[],
    items: JSON.parse(localStorage.getItem('cartItems')) || [],
    totalQuantity:1,
    totalAmount:0
}


const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
       
      if (existingItem) {
        existingItem.quantity += 1;
        state.totalQuantity += 1
       
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
        state.totalQuantity += 1
      }
      
      // Save updated cart to localStorage
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
 
        incrementQuantity: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload);
            item.quantity++;
            state.totalQuantity += 1
            
      // Save updated cart to localStorage
      localStorage.setItem('cartItems', JSON.stringify(state.items));
        },
        decrementQuantity: (state, action) => {
          const id = action.payload;
            const item = state.items.find((item) => item.id === id);
            if (item.quantity === 1) {
                item.quantity = 1
            } else {
                item.quantity--;
                state.totalQuantity -= 1
            }
            
      // Save updated cart to localStorage
      localStorage.setItem('cartItems', JSON.stringify(state.items));
        },
        removeItem: (state, action) => {
            const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        state.totalQuantity--;
        if (existingItem.quantity === 1) {
          state.items = state.items.filter(item => item.id !== id);
        } else {
          existingItem.quantity--;
          existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
        }
        state.totalAmount = state.items.reduce((acc, item) => acc + item.totalPrice, 0);
      }
      
      // Save updated cart to localStorage
      localStorage.setItem('cartItems', JSON.stringify(state.items));
        },

            // Action to clear the entire cart
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
      
      // Save updated cart to localStorage
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    }
})

export const {addToCart, incrementQuantity, decrementQuantity, removeItem,clearCart} = cartSlice.actions
export default cartSlice.reducer