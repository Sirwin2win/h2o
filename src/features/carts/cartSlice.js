import {createSlice} from '@reduxjs/toolkit'

const saveStorage = (cartState)=>{
    try {
        return localStorage.setItem('cartState', JSON.stringify(cartState))
    } catch (error) {
        return error.message
    }
}

const getStorage = ()=>{
try {
        const data = localStorage.getItem('cartState')
    return data?JSON.parse(data):null
} catch (error) {
    return error.message
}
}

const initialState = 
getStorage() || {
    cartItems:[],
    totalQuantity:0,
    totalAmount:0
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
       addToCart:(state,action)=>{
        const item = action.payload
        const existingItem = state.cartItems.find((v)=> v.id == item.id)
        if(existingItem){
            existingItem.quantity +=1
        }else{
            state.cartItems.push({...item,quantity:1})
        }
        state.totalQuantity +=1
        state.totalAmount += item.price
        // save to localStorage
        saveStorage(state)
       },
       removeFromCart:(state,action)=>{
        const id = action.payload
        const item = state.cartItems.find((v)=> v.id===id)
        if(item){
            state.totalQuantity -= item.quantity
            state.totalAmount -=item.quantity * item.price
        }
       
            state.cartItems = state.cartItems.filter((v)=>v.id !==id)
        
        // save localStorage
        saveStorage(state)
       },
       increaseCart:(state,action)=>{
        const id = action.payload
        const item = state.cartItems.find((v)=> v.id ===id)
        if(item){
            item.quantity +=1
            state.totalQuantity +=1
            state.totalAmount  += item.price
        }
        saveStorage(state)
       },
       descreaseCart:(state,action)=>{
        const id = action.payload
        const item = state.cartItems.find((v)=> v.id ===id)
        if(item){
            item.quantity -=1
            state.totalQuantity -=1
            state.totalAmount -= item.price
        }
           if(item.quantity ===0){
            state.cartItems = state.cartItems.filter((v)=>v.id !==id)
            saveStorage(state)
        }
       },
       clearCart:(state,action)=>{
        state.cartItems=[]
        state.totalAmount = 0
        state.totalQuantity =0
       }
    }
})

export const {addToCart,removeFromCart,increaseCart,descreaseCart,clearCart} = cartSlice.actions
export default cartSlice.reducer