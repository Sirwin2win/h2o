import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchOrderByUserId } from '../features/orders/orderSlice'

const Orders = () => {
   const user = useSelector((state)=>state.auth.user)
  const {order, orderStatus} = useSelector(state=>state.orders)
  const dispatch = useDispatch()
  useEffect(()=>{
    if(orderStatus==='idle'){
      dispatch(fetchOrderByUserId())
    }
  },[dispatch,orderStatus])
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