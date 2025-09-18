import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchProducts } from "../features/productSlice";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";


const ImageCarousel = () => {
  const {products, status, error} = useSelector((state)=> state.products)
  const dispatch = useDispatch()
  // Sample product data
 const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
};
 
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
        <div className="content my-20">
      <h1 className="header text-center my-10">Product Gallery</h1>
      <div className="container">
        <Slider {...settings}>
          {products.map((product) => (
              <div className="mx-auto mt-11 w-40 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg" key={product.id}>
  <img className="size-40 bg-cover object-center" src={product.image} />
  <Link to={`/product/${product.id}`} >
  <div className="p-4">
    <p className="mb-3 p-10 font-medium dark:text-white text-gray-900">{product.title}</p>
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
        </Slider>
      </div>
    </div>
  );
};

export default ImageCarousel;
