import React from 'react'

const TrashForm = () => {

       const images = [
    "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
    "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
  ];
  return (

<div data-hs-carousel='{
  "loadingClasses": "opacity-0",
  "dotsItemClasses": "hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500",
  "isCentered": true,
  "slidesQty": {
    "xs": 1,
    "lg": 2
  }
}' class="relative">
  <div class="hs-carousel w-full overflow-hidden bg-white rounded-lg dark:bg-neutral-900">
    <div class="relative min-h-72 -mx-1">
      <div class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
        <div class="hs-carousel-slide px-1">
            <img src={images[0]} alt='Pix' className='h-auto w-auto' />
          <div class="flex justify-center h-full bg-gray-100 p-6 dark:bg-neutral-900">
            <img src={images[0]} alt='Pix' className='h-auto w-auto' />
            <span class="self-center text-sm text-gray-800 transition duration-700 dark:text-white">First slide</span>
          </div>
          <img src={images[0]} alt='Pix' className='h-auto w-auto' />
        </div>
        <div class="hs-carousel-slide px-1">
          <div class="flex justify-center h-full bg-gray-200 p-6 dark:bg-neutral-800">
            <span class="self-center text-sm text-gray-800 transition duration-700 dark:text-white">Second slide</span>
          </div>
        </div>
        <div class="hs-carousel-slide px-1">
          <div class="flex justify-center h-full bg-gray-300 p-6 dark:bg-neutral-700">
            <span class="self-center text-sm text-gray-800 transition duration-700 dark:text-white">Third slide</span>
          </div>
        </div>
        <div class="hs-carousel-slide px-1">
          <div class="flex justify-center h-full bg-gray-100 p-6 dark:bg-neutral-900">
            <span class="self-center text-sm text-gray-800 transition duration-700 dark:text-white">Fourth slide</span>
          </div>
        </div>
        <div class="hs-carousel-slide px-1">
          <div class="flex justify-center h-full bg-gray-200 p-6 dark:bg-neutral-800">
            <span class="self-center text-sm text-gray-800 transition duration-700 dark:text-white">Fifth slide</span>
          </div>
        </div>
        <div class="hs-carousel-slide px-1">
          <div class="flex justify-center h-full bg-gray-300 p-6 dark:bg-neutral-700">
            <span class="self-center text-sm text-gray-800 transition duration-700 dark:text-white">Sixth slide</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <button type="button" class="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-11.5 h-full text-gray-800 hover:bg-gray-800/10 focus:outline-hidden focus:bg-gray-800/10 rounded-s-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
    <span class="text-2xl" aria-hidden="true">
      <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="m15 18-6-6 6-6"></path>
      </svg>
    </span>
    <span class="sr-only">Previous</span>
  </button>
  <button type="button" class="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-11.5 h-full text-gray-800 hover:bg-gray-800/10 focus:outline-hidden focus:bg-gray-800/10 rounded-e-lg dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
    <span class="sr-only">Next</span>
    <span class="text-2xl" aria-hidden="true">
      <svg class="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="m9 18 6-6-6-6"></path>
      </svg>
    </span>
  </button>

  <div class="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 flex gap-x-2"></div>
</div>
/*


    <IfModule mod_rewrite.c>
      RewriteEngine On
      RewriteBase /
      RewriteRule ^index\.html$ - [L]
      RewriteCond %{REQUEST_FILENAME} !-f
      RewriteCond %{REQUEST_FILENAME} !-d
      RewriteCond %{REQUEST_FILENAME} !-l
      RewriteRule . /index.html [L]
    </IfModule>

*/

  )
}

export default TrashForm