import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ShoppingCartCard from './ShoppingCartCard'

const CartContainer = () => {
    const {items, totalAmount} = useSelector((state)=> state.cart)
    const dispatch = useDispatch()

  return (
    <div>
      <h2>Your Shopping Cart</h2>
      {items.map((item)=>{
        <ShoppingCartCard  key={item.id}
        id={item.id}
       {...item} />
})}
    </div>
  )
}

export default CartContainer
