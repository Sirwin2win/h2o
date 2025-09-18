import React, { useState } from 'react';

const ImageCarousel = () => {
  // Sample product data
  const products = [
    { id: 1, name: 'Product 1', price: '$99', img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png" },
    { id: 2, name: 'Product 2', price: '$129', img: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png", },
    { id: 3, name: 'Product 3', price: '$89', img: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png", },
    { id: 4, name: 'Product 4', price: '$149', img: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png", },
    { id: 5, name: 'Product 5', price: '$199', img: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png", },
  ];

  // State to manage current product index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Next product function
  const nextProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  // Previous product function
  const prevProduct = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative max-w-full w-full bg-gray-200">
      {/* Product Card Container */}
      <div className="flex items-center justify-center space-x-4">
        <button
          onClick={prevProduct}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full text-white hover:bg-opacity-75"
        >
          &#10094;
        </button>

        <div className="flex overflow-hidden">
          <div
            className="flex transition-all duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 220}px)` }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-52 h-72 bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <p className="text-lg text-gray-700">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={nextProduct}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-3 rounded-full text-white hover:bg-opacity-75"
        >
          &#10095;
        </button>
      </div>

      {/* Optional: Dots to indicate current product */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {products.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`cursor-pointer w-3 h-3 rounded-full bg-white transition-all ${
              currentIndex === index ? 'bg-opacity-75' : 'bg-opacity-50'
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
