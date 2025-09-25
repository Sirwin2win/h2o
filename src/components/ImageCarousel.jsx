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
  slidesToScroll: 1
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
        <div className="w-3/4 m-auto">
      <h1 className="header text-center my-10">Product Gallery</h1>
      <div className="mt-20">
        <Slider {...settings}>
          {/* <div className="grid sm:grid-cols-2 md:grid-cols-4 pt-8 gap-2"> */}
          {products.map((product) => (
    <div className="bg-white h-[450px] text-black rounded-xl" key={product.id}>
      <div className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl">
  <img className="size-40 rounded-full" src={product.image} />
      </div>
  <Link to={`/product/${product.id}`} >
  <div className="flex flex-col items-center justify-center gap-4 p-4">
    <p className="text-xl font-semibold">{product.title}</p>
      <p className="text-center">${product.price}</p>
      <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">Read More</button> 
  </div>
  </Link>
</div> 
          ))}
          {/* </div> */}
        </Slider>
      </div>
    </div>
  );
};

export default ImageCarousel;
