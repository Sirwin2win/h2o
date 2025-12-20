import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate,useLocation  } from 'react-router-dom'
import {addPay} from '../features/pay/paySlice'
import { GiCombinationLock } from 'react-icons/gi'
// import { clearCart } from '../features/carts/cartSlice'
// import { clearCurrentOrder } from '../features/orders/orderSlice'

const Pay = () => {
  const { state } = useLocation();
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const user = useSelector((state)=>state.auth.user)
  console.log(state.orderRef)
  const handleSubmit = (e) => {
    e.preventDefault();
    const checkout={
      orderRef: state.orderRef,
      amount:state.totalAmount,
      email:user.email,
     
    }
    console.log(checkout)
    dispatch(addPay(checkout));

  }
   const { paymentUrl, loading, error } = useSelector((state) => state.pay);
     useEffect(() => {
      if (paymentUrl) {
        // Either open in new tab
        window.open(paymentUrl, '_blank');
  
        // Or redirect in same tab
        // window.location.href = paymentUrl;

      }
    }, [paymentUrl]);
  return (
    <div>
        <h1>Your Orders</h1>
                <button  onClick={handleSubmit}  className="bg-blue-700 hover:bg-blue-700 text-white my-5 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Pay(₦{state.totalAmount})
            </button>
    </div>
  )
}

export default Pay