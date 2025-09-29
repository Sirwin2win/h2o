import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link, useParams } from "react-router-dom";
import { updateProduct, fetchProduct } from "../features/productSlice";
import logo from '../assets/images/logo.jpg'
import { IoCloudUploadOutline } from "react-icons/io5";
import { fetchCategories } from "../features/category/categorySlice";


const EditProductForm = () => {
    // Initializing hooks
    const dispatch = useDispatch()
    const {id} = useParams()
    // getting products from the redux store
    const {currentProduct, status,error} = useSelector((state)=>state.products)
    const {categories} = useSelector((state)=> state.categories)
    const [formData, setFormData] = useState({
  title: "",
  price: "",
  description: "",
  categoryId: "",
  image: null, // file object or URL
});

   // Dispatching fetch request
    useEffect(()=>{
       if(id){
          dispatch(fetchProduct(id))
          // setRes(currentProduct)
        
        }
       
    },[dispatch,id])

   useEffect(() => {
  if (currentProduct) {
    setFormData({
      title: currentProduct.title || "",
      price: currentProduct.price || "",
      description: currentProduct.description || "",
      categoryId: currentProduct.categoryId || "",
      image: currentProduct.image || null, // can be string (URL)
    });
  }
}, [currentProduct]);


const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const handleImageChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    setFormData((prev) => ({
      ...prev,
      image: file,
    }));
  }
};

  const handleSubmit = async (e) => {
  e.preventDefault();

  const product = new FormData();
  product.append("title", formData.title);
  product.append("price", formData.price);
  product.append("description", formData.description);
  product.append("categoryId", formData.categoryId);

  // Only send file if it's a File object
  if (formData.image && typeof formData.image === "object") {
    product.append("image", formData.image);
  }

  dispatch(updateProduct({ id:id,product }));
};
  
  
    useEffect(()=>{
      if(status==='idle'){
        dispatch(fetchCategories())
      }
    },[status, dispatch])
    if(status === "loading"){
      return <div>Loading...</div>
    }
    if(status === 'faile'){
      return <div>Error : {error}</div>
    }

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <div
              className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
               {/* Header */}
              <div className="text-center mb-8">
               <img src={logo} alt='' className='my-5 mx-auto' />
                <p className="mt-2 text-sm sm:text-base text-gray-600">
                  Please Upload Products here
                </p>
              </div>
               {/* Form  */}
              <form className="space-y-6" encType="multipart/form-data">
                 {/* Email  */}
                <div>
                  <label className="block text-sm font-medium text-gray-700" htmlFor="title">Product Title</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    
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
                    value={formData.price}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-blue-500"
                    required
                  />
                </div>
    
                 {/* Password  */}
                    <div className="mb-6">
              <p>Upload Product Image</p>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="image"
              >
                {/* {currentProduct.image} */}
                {/* {image ? (
                  <img
                    src={URL.createObjectURL(image)}
                    alt=""
                    height={300}
                    width={300}
                  />
                ) : (
                  <IoCloudUploadOutline className="size-[50px]" />
                )} */}
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight
           focus:outline-none focus:shadow-outline form-control"
                id="image"
                name="image"
                onChange={handleImageChange}
                type="file"
                // hidden
                required
              />
            </div>
            {/* Category */}
                  <div>
                  <label className="block text-sm font-medium text-gray-700" htmlFor="category">Category</label>
                   <div className="md:w-1/3">
                </div>
                <select
                  className="w-[333px] mt-[30px] border border-gray-400 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  // value={city}
                  id="category"
                  // value={data.categoryId}
                  name="categoryId"
                  onChange={handleChange}
                >
                  <option >--Categories--</option>
                  {/* <option value="bag">bag</option> */}
                  {categories && 
                    categories.map((cat) => (
                      <option key={cat.id} value={cat.id} >
                        {cat.name}
                      </option>
                    ))}
                </select>
              </div>
                {/* </div> */}
                  <div>
                  <label className="block text-sm font-medium text-gray-700" htmlFor="description">Product Description</label>
                  <textarea name="description" value={formData.description}   onChange={handleChange} className='mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-blue-500' id="description">
                  </textarea>
            
                </div>
                <button
                  type="submit"
                  onClick={handleSubmit}
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

export default EditProductForm