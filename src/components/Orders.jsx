import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchOrder } from '../features/orders/orderSlice'

const Orders = () => {
   const user = useSelector((state)=>state.auth.user)
  const {order, orders} = useSelector(state=>state.orders)
  const dispatch = useDispatch()
  useEffect(()=>{
    if(user.id){
      dispatch(fetchOrder(user.id))
    }
  },[dispatch,user.id])
  return (
    <div>
        <h1>Orders</h1>
        {order.map(v=>(
          <div>
            <h1>{v.order_ref}</h1>
          </div>
        ))}
    </div>
  )
}

export default Orders