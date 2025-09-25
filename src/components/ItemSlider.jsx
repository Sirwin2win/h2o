import React, { useState } from "react";
import Slider from "react-slick";
import bottle30 from '../assets/images/bottle30.avif'
import bottle35 from '../assets/images/bottle35.avif'
import bottle40 from '../assets/images/bottle40.avif'
import bottle50 from '../assets/images/bottle50.avif'
import bottle75 from '../assets/images/bottle75.avif'
import bottled from '../assets/images/bottled.avif'

const ItemSlider = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
      <div className="slider-container my-10">
      <Slider {...settings}>
        <div>
          <img src={bottled}  alt=""/>
        </div>
        <div>
           <img src={bottle30}  alt=""/>
        </div>
        <div>
           <img src={bottle35}  alt=""/>
        </div>
        <div>
           <img src={bottle40}  alt=""/>
        </div>
        <div>
          <img src={bottle50}  alt=""/>
        </div>
        <div>
           <img src={bottle75}  alt=""/>
        </div>
        {/* <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div> */}
      </Slider>
    </div>
  )
}

export default ItemSlider
