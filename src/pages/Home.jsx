import React, { useEffect } from 'react'
import headset1 from '../assets/images/headset1.avif'
import dress4 from '../assets/images/dress4.avif'
import laptop2 from '../assets/images/laptop2.avif'
import nike3 from '../assets/images/nike3.avif'
import phone1 from '../assets/images/phone1.avif'
import cowgirl from '../assets/images/cowgirl.avif'
import headset3 from '../assets/images/headset3.avif'
import laptop4 from '../assets/images/laptop4.avif'
import Slide from '../components/Slide'
// import ProductCard from '../components/ProductCard'
// import { useGetProductsQuery } from '../features/apiSlice'
import { Link } from 'react-router-dom';
import { LiaCalendarWeekSolid } from 'react-icons/lia';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/productSlice';
// import TopSellers from '../Sales/TopSellers'
import water1 from '../assets/images/water1.avif'
import water2 from '../assets/images/water2.avif'
import water3 from '../assets/images/water3.avif'
import water4 from '../assets/images/water4.avif'
import FeatureSection from '../components/FeatureSection'
import ItemSlider from '../components/ItemSlider'
import CardSlide from '../components/CardSlide'

const Home = () => {
    // const products = [
    //     {id:1, name:"Gaming Headset",price:300, rating:4, image:headset1},
    //     {id:2, name:"Cute dress",price:200, rating:4, image:dress4},
    //     {id:3, name:"Mac pro",price:800, rating:5, image:laptop2},
    //     {id:4, name:"Nike sneaker",price:500, rating:5, image:nike3},
    //     {id:5, name:"Nice iPhone ",price:2000, rating:5, image:phone1},
    //     {id:6, name:"Cowgirl Shoe",price:400, rating:3, image:cowgirl},
    //     {id:7, name:"Cool teens Headset",price:80, rating:3, image:headset3},
    //     {id:8, name:"Mac Book",price:950, rating:3, image:laptop4},
    // ]

    const images = [
    water1,
    water4,
    water3,
  ];
  const dispatch = useDispatch()
  const {products, status} = useSelector((state) => state.products);
  const user = useSelector((state)=> state.auth.user)
// console.log(user.role)
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

    <div>
      {/* <Navbar /> */}
    
<Slide images={images}/>
 <FeatureSection />
    <div className='grid sm:grid-cols-2 md:grid-cols-4 pt-8 gap-2'>
        {products.map((product)=>( 
              // <div key={product.id} className='h-60 w-60'> <img src={product.image}  /></div>
     <div className="mx-auto mt-11 w-60 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg" key={product.id}>
  <img className="h-48 w-full object-cover object-center" src={`https://api.buywaterh2o.com/${product.image}`} />
  <Link to={`/product/${product.id}`} >
  <div className="p-4">
    <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">{product.title}</h2>
    <p className="mb-2 text-base dark:text-gray-300 text-gray-700">{product.description}</p>
    <div className="flex items-center">
      <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">₦{product.price}</p>
      <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">₦25.00</p>
      <p className="ml-auto text-base font-medium text-green-500">20% off</p>
    </div>
  </div>
   </Link>
</div>             
        ))}
          </div>
         

     {/* <ItemSlider /> */}
     <CardSlide />

          {/* <ImageCarousel /> */}
          {/* <TrashForm /> */}
          </div>
  )
}

export default Home