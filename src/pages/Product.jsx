import React, { useEffect } from 'react'
// import { useGetProductsQuery } from '../features/apiSlice'
import { Link } from 'react-router-dom';
import { LiaCalendarWeekSolid } from 'react-icons/lia';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/productSlice';





const Product = () => {
    // const {data:products, isLoading, isSuccess, isError, error} = useGetProductsQuery()
const dispatch = useDispatch()
const {products, status, error} = useSelector((state)=> state.products)
  const searchTerm = useSelector((state) => state.filter.searchTerm);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
return (
    <div className='container'>
       <div className='grid sm:grid-cols-2 md:grid-cols-4 pt-8 gap-2'>
        {filteredProducts.map((product)=>(
    <div className="mx-auto mt-11 w-60 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg" key={product.id}>
  <img className="h-48 w-full bg-cover object-center" src={product.image} />
  <Link to={`/product/${product.id}`} >
  <div className="p-4">
    <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">{product.title}</h2>
    <p className="mb-2 text-base dark:text-gray-300 text-gray-700"></p>
    <div className="flex items-center">
      <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">${product.price}</p>
      <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">$25.00</p>
      <p className="ml-auto text-base font-medium text-blue-700">20% off</p>
     
    </div>
  </div>
  </Link>
</div> 
            
        ))}
        </div>
    </div>
  )
}

export default Product