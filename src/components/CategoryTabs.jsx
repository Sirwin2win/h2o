import React, { useState, useEffect } from 'react';
import {
  GlobeAltIcon,
  CpuChipIcon,
  HeartIcon,
 BanknotesIcon
} from '@heroicons/react/24/outline';
import { fetchProducts } from '../features/productSlice';
import { useDispatch, useSelector } from 'react-redux';


const categories = [
  { name: 'All', icon: GlobeAltIcon },
  { name: 'Bottled Water', icon: CpuChipIcon },
  { name: 'Sachet Water', icon: HeartIcon },
  { name: 'Dispenser Water', icon: BanknotesIcon },
//   { name: 'Travel', icon: PlaneIcon },
];

const CategoryTabs = () => {
    const {products, status, error} = useSelector((state)=> state.products)
    const dispatch = useDispatch()
    const [activeTab, setActiveTab] = useState('All');


      let sachet = []
  let bottle = []
  let dispenser =[]



  
  for(let i =0; i<products.length; i++){
    if(products[i].categoryId==19){
      sachet.push(products[i])
    }else if(products[i].categoryId==20){
      bottle.push(products[i])
    }else if(products[i].categoryId==21){
      dispenser.push(products[i])
    }
  }


const posts = [
  sachet,
  dispenser,
  bottle,
//   { title: 'Top 10 Places to Visit in Europe', category: 'Travel' },
//   { title: 'The Future of Quantum Computing', category: 'Technology' },
];


  // console.log(sachet)
  // console.log(dispenser)
  // console.log(bottle)
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

    const filteredPosts =
    activeTab === 'All'
      ? products
      : products.filter((product) => product.cat === activeTab);
  return (
    <div className="w-full max-w-3xl mx-auto mt-10">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-2">
        {categories.map(({ name, icon: Icon }) => (
          <button
            key={name}
            onClick={() => setActiveTab(name)}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-all duration-200
              ${
                activeTab === name
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
          >
            <Icon className="h-4 w-4" />
            {name}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="mt-6 space-y-4">
        {filteredPosts.length === 0 ? (
          <p className="text-gray-500">No posts found in "{activeTab}"</p>
        ) : (
          filteredPosts.map((post, index) => (
            <div
              key={index}
              className="p-4 border border-gray-200 rounded-md bg-white shadow-sm"
            >
              <img src={`https://api.buywaterh2o.com/${post.image}`} alt='' className='size-30' />
              <h3 className="text-lg font-semibold text-gray-800">
                {post.title}
              </h3>
              <p className="text-sm text-gray-500">{post.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default CategoryTabs