import React, { useEffect } from 'react'
import { FaRegTrashAlt,FaRegEdit  } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { LiaCalendarWeekSolid } from 'react-icons/lia';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, deleteProduct } from '../features/productSlice';


const ManageProducts = () => {
    const dispatch = useDispatch()
    const {products, status, error} = useSelector((state)=> state.products)
    const user = useSelector((state)=> state.auth.user)

    
    useEffect(()=>{
      if(status==='idle'){
        dispatch(fetchProducts())
      }
    },[status, dispatch])
    if(status === "loading"){
      return <div>Loading...</div>
    }
    if(status === 'faile'){
      return <div>Error : {error}</div>
    }

     const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      dispatch(deleteProduct(id));
    }
  };
  return (
    <div>
      {user.role == 'admin'?
     <button className='bg-blue-700 rounded-2xl h-10 w-30 font-bold my-4 mx-auto'><Link to={'/create-product'} className='text-center text-white'>Create Product</Link></button> 
     :
     <p>You can only view products</p>
      }
    <table className="w-full text-left table-auto">
  <thead>
    <tr className="bg-gray-200">
      <th className="px-4 py-2">ID</th>
      <th className="px-4 py-2">TITLE</th>
      <th className="px-4 py-2">IMAGE</th>
      <th className="px-4 py-2">PRICE</th>
      <th className="px-4 py-2">ACTION</th>
    </tr>
  </thead>
  <tbody>
    {products.map((product)=>(
         <tr className="border-b" key={product.id}>
      <td className="px-2 py-2">{product.id}</td>
      <td className="px-2 py-2">{product.title}</td>
      <td className="px-2 py-2"><img src={`https://api.buywaterh2o.com/${product.image}`} alt='' className='size-30' /></td>
      <td className="px-2 py-2">₦{product.price}</td>
      {user.role == 'admin'?

<td className="px-2 py-2 mt-13 flex"><Link to={`/edit/${product.id}`}><FaRegEdit className='text-orange-500 mr-2' /></Link> | <FaRegTrashAlt className='text-red-500 ml-2' onClick={() => handleDelete(product.id)} /> </td>
      :
      <td className="px-2 py-2">₦{product.price}</td>
      }
    </tr>
    ))}
  </tbody>
</table>
    </div>
  )
}

export default ManageProducts