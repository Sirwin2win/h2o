import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
// import { toast } from "react-toastify";
import {
createCategory
} from "../features/category/categorySlice";

const Categories = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
  });
  const { name } = formData;

  const { user } = useSelector((state) => state.auth);
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const categoryData = {
      name
    };
    console.log(categoryData);
    dispatch(createCategory(categoryData));
    // navigate("../profile");
  //   setFormData({
  // name:""
  //   });
  };
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <div
              className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
               {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-700">
                 Create Category
                </h2>
              </div>
              <form className="space-y-6">
                  <div>
                  <label className="block text-sm font-medium text-gray-700" htmlFor="name">Category Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={onChange}
                    className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-blue-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  onClick={onSubmit}
                  className="w-full flex justify-center py-2 px-4 sm:py-3 border border-transparent rounded-lg shadow-sm text-sm sm:text-base font-medium text-white bg-blue-700 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <span>Create</span>
                </button>
              </form>
            </div>
          </div>
        </div>
  );
};
export default Categories;