import React, { useEffect, useState } from 'react'
import logo from '../assets/images/logo.jpg'
import {getUsers,updateRole} from '../features/auth/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const UserRoleForm = () => {
  const {users, status} = useSelector((state)=>state.auth)
  const user = useSelector((state)=> state.auth.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()


    const [data, setData] = useState({
      role:"",
      id:""
    });


  const handleChange = (e) => {
  const { name, value } = e.target;
  setData((prevData) => ({
    ...prevData,
    [name]: value
  }));
};

  const handleSubmit = async (e) => {
      e.preventDefault();
   const update = {
  role: data.role,
  id: data.id
};
      // console.log(update);
      dispatch(updateRole(update));
      if (update) {
      navigate('/sidebar')
      }
    };
  

  useEffect(()=>{
    if(status==='idle'){
      dispatch(getUsers())
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
               Please Create a category for the products
             </p>
           </div>
            {/* Form  */}
           <form className="space-y-6">
           {/* Users */}
              <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="id">Users</label>
               <div className="md:w-1/3">
            </div>
            <select
              className="w-[333px] mt-[30px] border border-gray-400 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              // value={city}
              id="id"
              // value={data.categoryId}
              name="id"
              onChange={handleChange}
            >
              <option value="">--Users--</option>
              {/* <option value="bag">bag</option> */}
              {users && 
                users.map((user) => (
                  <>
                  <option key={user.id} value={user.id} >
                    {user.name}
                  </option>
                  
                  </>
                ))}
            </select>
          </div>
           {/* Roles */}
              <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="role">Roles</label>
               <div className="md:w-1/3">
            </div>
            <select
              className="w-[333px] mt-[30px] border border-gray-400 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              // value={city}
              id="role"
              // value={data.categoryId}
              name="role"
              onChange={handleChange}
            >
              <option >--Roles--</option>
              {/* <option value="bag">bag</option> */}
              {users && 
                users.map((user) => (
                  <>
                  <option key={user.id} value={user.role} >
                    {user.role}
                  </option>
                  
                  </>
                ))}
            </select>
          </div>
          {user.role == 'admin' && 
             <button
               type="submit"
               onClick={handleSubmit}
              //  disabled={categories.status === 'loading'}
               className="w-full flex justify-center py-2 px-4 sm:py-3 border border-transparent rounded-lg shadow-sm text-sm sm:text-base font-medium text-white bg-blue-700 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
             >
               <span>Update Role</span>
             </button>
}
           </form>
 
         </div>
       </div>
     </div>
  )
}

export default UserRoleForm
