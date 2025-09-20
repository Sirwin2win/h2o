import React from 'react'

const ProductForm = () => {
  return (
     <div className="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div
          className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
           {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-700">
              Welcome Back
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Please Upload Products here
            </p>
          </div>
           {/* Form  */}
          <form className="space-y-6">
             {/* Email  */}
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="title">Product Title</label>
              <input
                type="text"
                id="title"
                className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="price">Product Price</label>
              <input
                type="number"
                name='price'
                id="price"
                className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-blue-500"
                required
              />
            </div>

             {/* Password  */}
              <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="image">Image</label>
              <input
                type="file"
                id="image"
                name='image'
                className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-blue-500"
                required
              />
            </div>
              <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="description">Product Description</label>
              <textarea name="description" className='mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-blue-500' id="description">

              </textarea>
        
            </div>
      

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 sm:py-3 border border-transparent rounded-lg shadow-sm text-sm sm:text-base font-medium text-white bg-blue-700 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <span>Create Product</span>
            </button>
          </form>

        </div>
      </div>
    </div>
  )
}
export default ProductForm