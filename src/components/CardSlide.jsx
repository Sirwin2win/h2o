import React, { useState, useEffect } from 'react';
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const CardSlide = ({autoSlide = true, autoSlideInterval = 6000 }) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    
      useEffect(() => {
        if (autoSlide) {
          const slideInterval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
          }, autoSlideInterval);
          return () => clearInterval(slideInterval);
        }
      }, [autoSlide, autoSlideInterval, images.length]);
    
      const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      };
    
      const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      };
    
      return (
        <div className="relative w-200 max-w-3xl mx-auto">
          <div className="overflow-hidden relative h-130 w-200">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-transform transform ${
                  index === currentIndex ? 'translate-x-0' : 'translate-x-full'
                }`}
              >
                <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2  text-white p-2"
            onClick={prevSlide}
          >
            <FaChevronCircleLeft className='text-gray-800' />
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2  text-white p-2"
            onClick={nextSlide}
          >
          <FaChevronCircleRight className='text-gray-800' />
          </button>
          <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-4">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full mx-1 ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      );
    };
    

export default CardSlide