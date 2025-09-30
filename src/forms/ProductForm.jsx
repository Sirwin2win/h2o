import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { addProduct } from "../features/productSlice";
import logo from '../assets/images/logo.jpg'
import { IoCloudUploadOutline } from "react-icons/io5";
import { fetchCategories } from "../features/category/categorySlice";

const ProductForm = () => {


const navigate = useNavigate();
  const dispatch = useDispatch();

  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    title: "",
    price:"",
    categoryId:"",
    description: "",
    // cat:""
  });

  // const { user } = useSelector((state) => state.auth);
  // const { title, agenda, image, branch } = formData;
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let cat = localStorage.getItem("cat");
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("categoryId", data.categoryId);
    formData.append("image", image);
    formData.append("cat", cat);

   
    console.log(formData);
    dispatch(addProduct(formData));
    localStorage.removeItem(cat);
    if (formData) {
      setData({
        title: "",
        description: "",
        image: "",
        price: "",
        categoryId: "",
      });
      setImage(false);
      navigate('/product');
    }
  };


  const {categories, status, error} = useSelector((state)=> state.categories)
  
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
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-blue-500"
                required
              />
            </div>

             {/* Password  */}
                <div className="mb-6">
          <p>Upload Product</p>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="image"
          >
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                alt=""
                height={300}
                width={300}
              />
            ) : (
              <IoCloudUploadOutline className="size-[50px]" />
            )}
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight
       focus:outline-none focus:shadow-outline form-control"
            id="image"
            name="image"
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            hidden
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
                  <>
                  <option key={cat.id} value={cat.id} >
                    {cat.name}
                  </option>
                  {localStorage.setItem('cat',cat.name)}
                  </>
                ))}
            </select>
          </div>
            {/* </div> */}
              <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="description">Product Description</label>
              <textarea name="description" onChange={handleChange} className='mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-blue-500' id="description">

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
export default ProductForm