import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
// import { toast } from "react-toastify";
import {
fetchCategories
} from "../features/category/categorySlice";

const Categories = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
    <div>
      {categories.map((cat)=>(
        <div>
          <p>{cat.name}</p>
        </div>
      ))}
    </div>
  );
};
export default Categories;