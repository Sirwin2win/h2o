import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
// import { useGetProductByIdQuery } from "../features/apiSlice";
import { getProductById } from '../features/detailReducer'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, incrementQuantity, decrementQuantity, removeItem } from '../features/cartSlice'

const DetailPage = () => {
   const dispatch = useDispatch()
    const {data:product, isLoading,error} = useSelector((state)=>state.product)
    const {id} = useParams()
    useEffect(()=>{
        dispatch(getProductById(id))
        // console.log(product)
    },[dispatch,id])
  return (
   <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
       {/* LEFT: Images  */}
      <div className="space-y-4">
        <div className="rounded-xl overflow-hidden bg-white p-6 shadow-sm">
          <div className="relative">
            <span className="absolute left-4 top-4 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-red-500 text-white shadow">6% OFF</span>
            <img src={product.image} alt="Plums" className="w-full h-96 object-cover rounded-lg" />
          </div>
          <div className="mt-4 flex gap-3 items-center">
            <div className="w-16 h-16 rounded-md border p-1 flex items-center justify-center bg-white">
              <img src={product.image} alt="thumb" className="w-full h-full  object-cover rounded-sm" />
            </div>
            <div className="text-sm text-gray-500">{product.title}</div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">About this product</h3>
          <p className="text-sm text-gray-600 leading-relaxed"> {product.description}</p>
        </div>
      </div>
       {/* RIGHT: Product Info  */}
      <aside className="sticky top-6">
        <div className="bg-white rounded-xl shadow p-6 lg:p-8">
          <h5 className="text-2xl lg:text-3xl font-extrabold leading-tight">{product.category}</h5>
          <div className="mt-4 flex items-end gap-4">
            <div>
              <div className="text-3xl lg:text-4xl font-extrabold price-shadow">${product.price}</div>
              <div className="text-sm text-gray-400 line-through">$80.00</div>
              <div className="text-sm text-green-600 font-medium mt-1">You save $30</div>
              <div className="text-xs text-gray-400 mt-1">Inclusive of all taxes</div>
            </div>
            <div className="ml-auto text-right">
              <button aria-label="Add to wishlist" className="p-2 rounded-md border hover:bg-gray-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 18.656 3.172 11.83a4 4 0 010-5.656z"/></svg>
              </button>
            </div>
          </div>
           {/* Delivery & Stock  */}
          <div className="mt-5 border rounded-lg p-4 bg-gray-50 flex items-center gap-4">
            <div className="flex-1 text-sm">
              <div className="font-medium">Delivery in 1-3 days</div>
              <div className="text-xs text-gray-500">Shipment of 1 item</div>
            </div>
            <div className="text-sm font-medium text-green-600">In Stock</div>
          </div>
           {/* Quantity & Add  */}
          <div className="mt-5">
            <label htmlFor="qty" className="block text-sm font-medium text-gray-700 mb-2">Quantity <span className="text-xs text-gray-400">(99 available)</span></label>
            <div className="flex items-center gap-3">
              <div className="flex items-center rounded-lg border overflow-hidden">
                {/* <button id="addToCart" className="ml-auto flex-1 lg:flex-none  text-blue-700 font-semibold rounded-lg px-6 py-3 shadow">Continue Shopping</button> */}
                <button id="dec" className="px-4 py-2 text-lg bg-white hover:bg-gray-100" onClick={()=>dispatch(decrementQuantity())}>−</button>
                {/* <input id="qty" type="number" value="1" min="1" max="10" className="w-16 text-center outline-none p-2" aria-label="Quantity" /> */}
                <button id="inc" className="px-4 py-2 text-lg bg-white hover:bg-gray-100" onClick={()=>dispatch(incrementQuantity(product.id))}>+</button>
              </div>
              <button id="addToCart" className="ml-auto flex-1 lg:flex-none bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg px-6 py-3 shadow" onClick={()=>dispatch(addToCart(product))}>Add to Cart</button>
            </div>
            <p className="text-xs text-gray-400 mt-2">To become a dealer: <strong className="text-gray-700">Buy 100 and above</strong></p>
          </div>
          <hr className="my-6" />
          <dl className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-gray-600">
            <div>
              <dt className="text-xs text-gray-500">Origin</dt>
              <dd className="mt-1">Abuja</dd>
            </div>
            <div>
              <dt className="text-xs text-gray-500">Storage</dt>
              <dd className="mt-1">Store at room temperature</dd>
            </div>
            <div>
              <dt className="text-xs text-gray-500">Shipment</dt>
              <dd className="mt-1">As Bought by the customer</dd>
            </div>
            <div>
              <dt className="text-xs text-gray-500">Tags</dt>
              <dd className="mt-1">
                <span className="inline-block px-3 py-1 rounded-full text-xs bg-green-50 text-green-700">Water</span>
              </dd>
            </div>
          </dl>
        </div>
         {/* Collapsible Details Card  */}
        <div className="mt-6 bg-white rounded-xl p-4 shadow-sm">
          <button aria-expanded="false" className="w-full flex items-center justify-between py-2 px-1" id="toggleDetails">
            <span className="font-medium">Treatment and Chemical component</span>
            <svg id="chev" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06-.02L10 10.88l3.71-3.69a.75.75 0 111.06 1.06l-4.24 4.22a.75.75 0 01-1.06 0L5.25 8.25a.75.75 0 01-.02-1.06z" clipRule="evenodd"/></svg>
          </button>
          <div id="detailsPanel" className="mt-3 hidden text-sm text-gray-600">
            <ul className="list-disc pl-5 space-y-1">
              <li>99.99 Bacterial free</li>
              <li>Good for your health</li>
              <li>Keep refrigerated for better experience</li>
            </ul>
          </div>
        </div>
         {/* Mobile sticky CTA  */}
        <div id="mobileCta" className="fixed left-0 right-0 bottom-4 px-4 lg:hidden">
          <div className="max-w-3xl mx-auto">
            <button id="mobileAdd" className="w-full bg-green-600 text-white rounded-full py-3 font-semibold shadow-lg" onClick={()=>dispatch(addToCart(product))}> Add to Cart</button>
          </div>
        </div>
      </aside>
    </section>
  )
}
export default DetailPage