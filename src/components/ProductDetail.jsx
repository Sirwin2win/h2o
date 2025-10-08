import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
// import { useGetProductByIdQuery } from "../features/apiSlice";
import { getProductById } from '../features/detailReducer'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../features/cartSlice'



const ProductDetail = () => {
   const dispatch = useDispatch()
    const {data:product, isLoading,error} = useSelector((state)=>state.product)
    const {id} = useParams()
    const cart = useSelector((state) => state.cart)
const totalQuantity = () => {
  let total = 0
  cart.forEach(item => {
    total += item.quantity
  })
  return total
}
    useEffect(()=>{
        dispatch(getProductById(id))
        // console.log(product)
    },[dispatch,id])
  return (
 <div className='md:flex p-2'>
         <div>
         <img src={product.image} alt='' className='' />
         </div>
         <div className='mx-[50px]'>
             <p className='my-3 text-center md:ml-0 md:text-2xl font-bold'>{product.title}</p>
             <p className='py-3'>{product.description}</p>
             <p className='text-2xl font-bold'>${product.price}</p>
             <div className='flex justify-evenly rounded-2xl bg-gray-300 my-5 w-30'>
             <button className='text-xl'>-</button>
             <p className='text-xl'>0</p>
             <button className='text-xl'>+</button>
             </div>
             <div className='flex my-9'>
                 <button className='bg-blue-500 text-white w-30 rounded-2xl py-1'>Buy Now</button>
                 <button className='text-blue-500 outline outline-blue-500 w-30 rounded-2xl py-1 ml-4' onClick={()=>dispatch(addToCart(product))}>Add to Cart</button>
             </div>
             {/* Delivery */}
             <p className='text-2xl font-bold my-5 text-center'>Delivery</p>
             <p>Free standart shipping on orders over <b>#1000</b> before tax, plus free returns</p>
             {/* Cart Table */}
            <table className="table-auto">
   <thead>
     <tr className='border-b border-gray-500'>
       <th className='px-10'>Type</th>
       <th className='px-10 py-2'>How Long</th>
       <th className='px-10'>How Much</th>
     </tr>
   </thead>
   <tbody>
     <tr className='border-b border-gray-500'>
       <td className='px-10'>Standard Delivery</td>
       <td className='px-10 py-1'>1 - 4 business days</td>
       <td className='px-10'>#3000</td>
     </tr>
     <tr className='border-b border-gray-500'>
       <td className='px-10'>Express Delivery</td>
       <td className='px-10 py-1'>1 business day</td>
       <td className='px-10'>#5463</td>
     </tr>
     <tr className='border-b border-gray-500'>
       <td className='px-10'>Pick up in store</td>
       <td className='px-10 py-1'>1- 3 business days</td>
       <td className='px-10'>free</td>
     </tr>
   </tbody>
 </table>
 {/* Return */}
 <p className='text-2xl font-bold my-5 text-center'>Return</p>
 <p className='text-gray-500'>You have 7 days to the item(s)</p>
         </div>
     </div>
  )
}

export default ProductDetail