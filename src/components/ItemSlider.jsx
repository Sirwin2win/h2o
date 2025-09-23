// components/Carousel.jsx

import React, { useEffect, useRef, useState } from "react";

const ItemSlider = ({ images, interval = 4000 }) => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrent((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => {
      resetTimeout();
    };
  }, [current, images.length, interval]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full h-[300px] sm:h-[400px] md:h-[500px]"
          >
            <img
              src={img}
              alt={`slide-${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ItemSlider;
