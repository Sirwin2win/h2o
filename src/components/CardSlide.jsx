import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bottle30 from '../assets/images/bottle30.avif'
import bottle35 from '../assets/images/bottle35.avif'
import bottle40 from '../assets/images/bottle40.avif'
import bottle50 from '../assets/images/bottle50.avif'
import bottle75 from '../assets/images/bottle75.avif'
import bottled from '../assets/images/bottled.avif'
import { FaChevronCircleLeft,FaChevronCircleRight } from "react-icons/fa";


const CardSlide = () => {
const data = [
  {id:1, img:bottle30, name:"Boottled water 30cl"},
  {id:2, img:bottle35, name:"Boottled water 35cl"},
  {id:3, img:bottle40, name:"Boottled water 40cl"},
  {id:4, img:bottle50, name:"Boottled water 50cl"},
  {id:5, img:bottle75, name:"Boottled water 75cl"},
]

 const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // adjust as needed
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const next = () => sliderRef.current.slickNext();
  const prev = () => sliderRef.current.slickPrev();


    
      return (
        // <div className="mx-auto relative m-auto">
         <div style={{ maxWidth: "900px", margin: "auto", position: "relative", marginTop:'25px', marginBottom:'30px' }}> 
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Our Products</h2>

      <Slider ref={sliderRef} {...settings}>
        {data.map((product) => (
          <div key={product.id} style={{ padding: "0 10px" }}>
            <div
              style={{
                border: "1px solid #00d",
                borderRadius: "8px",
                padding: "10px",
                textAlign: "center",
                background: "#fff",
                marginLeft:"30px"
              }}
            >
            {/* <div
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "10px",
                textAlign: "center",
                background: "#fff",
                marginLeft:"30px"
              }}
            > */}
              <img
                src={product.img}
                alt={product.name}
                // style={{ width: "100%", borderRadius: "4px", marginBottom: "10px" }}
                className="size-50 mx-auto"
              />
              <h4>{product.name}</h4>
              <p>{product.price}</p>
              <button style={{ padding: "6px 12px", background: "#007bff", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}>
                Order Now
              </button>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom Controls */}
    <FaChevronCircleLeft onClick={prev} style={{ ...navButtonStyle, left: "-30px" }}/>
      <FaChevronCircleRight onClick={next} style={{ ...navButtonStyle, right: "-30px"  }}/>
    </div>
      );
    };
    
const navButtonStyle = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  background: "#fff",
  border: "1px solid #ccc",
  borderRadius: "50%",
  width: "25px",
  height: "25px",
  fontSize: "18px",
  cursor: "pointer",
  zIndex: 10,
};
export default CardSlide