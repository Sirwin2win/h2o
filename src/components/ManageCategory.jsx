import React, { useEffect } from 'react'
import { FaRegTrashAlt,FaRegEdit  } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { LiaCalendarWeekSolid } from 'react-icons/lia';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCategory , fetchCategories} from '../features/category/categorySlice';


const ManageCategory = () => {
        const dispatch = useDispatch()
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
        
             const handleDelete = (id) => {
            if (window.confirm('Are you sure you want to delete this category?')) {
              dispatch(deleteCategory(id));
            }
          };
  return (
    <div>
        <table className="w-full text-left table-auto">
      <thead>
        <tr className="bg-gray-200">
          <th className="px-4 py-2">ID</th>
          <th className="px-4 py-2">NAME</th>
          <th className="px-4 py-2">ACTION</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((cat)=>(
             <tr className="border-b" key={cat.id}>
          <td className="px-2 py-2">{cat.id}</td>
          <td className="px-2 py-2">{cat.name}</td>
          <td className="px-2 py-2 mt-13 flex"><Link to={`/edit/${cat.id}`}><FaRegEdit className='text-orange-500 mr-2' /></Link> | <FaRegTrashAlt className='text-red-500 ml-2' onClick={() => handleDelete(product.id)} /> </td>
        </tr>
        ))}
      </tbody>
    </table>
        </div>
  )
}

export default ManageCategory