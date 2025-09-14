import React, { useState } from 'react'
import { FaBars, FaCog, FaHome, FaSignOutAlt, FaUserAlt } from 'react-icons/fa'
import { IoCloseSharp } from 'react-icons/io5'

const Sidebar = () => {
   const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='flex'>
      <div className={`w-20 md:w-64 bg-gray-800 transition-with duration-300 text-white
         ${isOpen ? "w-64" : "w-20"}
         `} >
         <div className='flex justify-between item-center p-4'>
         <h2 className={`text-xl font-bold  md:block ${isOpen?"block":"hidden"}`}>BuywaterH2O</h2>
         <button className='block md:hidden' onClick={()=> setIsOpen(!isOpen)}>
          {isOpen? <IoCloseSharp size={24} />: <FaBars size={24} /> }  
         </button>
          
         </div>
        
         <nav className='mt-4'>
   <ul>
      <li className='flex items-center p-4 hover:bg-gray-700 cursor-pointer'>
        <FaHome size={24} />
        <span className={`ml-4 md:block ${isOpen?"block":"hidden"}`}>
         Home
         </span>  
      </li>
      <li className='flex items-center p-4 hover:bg-gray-700 cursor-pointer'>
        <FaUserAlt size={24} />
        <span className={`ml-4 md:block ${isOpen?"block":"hidden"}`}>
         Profile
         </span>  
      </li>
      <li className='flex items-center p-4 hover:bg-gray-700 cursor-pointer'>
        <FaCog size={24} />
        <span className={`ml-4 md:block ${isOpen?"block":"hidden"}`}>
         Settings
         </span>  
      </li>
      <li className='flex items-center p-4 hover:bg-gray-700 cursor-pointer'>
        <FaSignOutAlt size={24} />
        <span className={`ml-4 md:block ${isOpen?"block":"hidden"}`}>
         Logout 
         </span>  
      </li>
   </ul>
         </nav>
      </div>
      {/* dashboard */}
      <div className='p-8 bg-gray-100 min-h-screen flex-1'>
         <h2 className='text-2xl font-bold'>Dashboard</h2>
         <h2 className=''>Dashboard to the right side</h2>
          
      </div>
    </div>
  )
}

export default Sidebar