import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { register } from "../features/auth/authSlice";

const RegisterForm = () => {
  const dispatch = useDispatch()
  const auth = useSelector((state) => state.auth)

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    password: '',
  })

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)
    dispatch(register(form))
  } 

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
              Please fill out your information
            </p>
          </div>
           {/* Form  */}
          <form className="space-y-6" >
             {/* Email  */}
              {auth.error && <p style={{ color: 'red' }}>{auth.error}</p>}
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                 onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email Address</label>
              <input
                type="text"
                id="email"
                name="email"
                 onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="phone">Phone Number</label>
              <input
                type="text"
                id="phone"
                name="phone"
                 onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                 onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                 onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              disabled={auth.status === 'loading'}
              onClick={handleSubmit}
              className="w-full flex justify-center py-2 px-4 sm:py-3 border border-transparent rounded-lg shadow-sm text-sm sm:text-base font-medium text-white bg-blue-700 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <span> {auth.status === 'loading' ? 'Registering...' : 'Register'}</span>
            </button>
          </form>

        </div>
      </div>
    </div>
  )
}

export default RegisterForm