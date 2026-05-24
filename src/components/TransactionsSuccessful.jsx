import React,{useState,useEffect} from 'react'
import { getPay } from '../features/pay/paySlice'
import { useDispatch, useSelector } from 'react-redux'



const TransactionsSuccessful = () => {
    const {pay,status} = useSelector(state=>state.pay)
    const dispatch = useDispatch()
    useEffect(()=>{
        if(status==='idle'){
            dispatch(getPay())
        }
    },[status, dispatch])

    if(status === "loading"){
              return <div>Loading...</div>
            }
            if(status === 'faile'){
              return <div>Error : {error}</div>
            }
        
            return (
                <div>
    <h1 className='text-primary text-center'>Transaction Details</h1>
        <table className="w-full text-left table-auto">
      <thead>
        <tr className="bg-gray-200">
          <th className="px-4 py-2">Trans Id</th>
          <th className="px-4 py-2">Amount</th>
          <th className="px-4 py-2">Status</th>
          <th className="px-4 py-2">Cust. Email</th>
          <th className="px-4 py-2">Product Name</th>
          <th className="px-4 py-2">Product Qty</th>
          {/* <th className="px-4 py-2">ACTION</th> */}
        </tr>
      </thead>
      <tbody>
        {pay.map((v)=>(
             <tr className="border-b" key={v.id}>
          <td className="px-2 py-2">{v.transaction_id}</td>
          <td className="px-2 py-2">{v.amount}</td>
          <td className="px-2 py-2">{v.status}</td>
          <td className="px-2 py-2">{v.email}</td>
          <td className="px-2 py-2">{v.product_name}</td>
          <td className="px-2 py-2">{v.quantity}</td>
         
        </tr>
        ))}
      </tbody>
    </table>
        </div>
  )
}

export default TransactionsSuccessful