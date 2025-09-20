import React, { useState } from 'react'

const CheckoutForm = () => {
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        address:""
    })
    const [submitting, setSubmitting] = useState(false)// state variable to track form submission
    const handleChange = ({target})=>{
        const {name,value} = target
        setFormData({...formData, [name]:value})

    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        setSubmitting(true)// set submitting state to true when form is submitted
        // Send the form data to the server
        fetch('/api/payment-link',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(formData)
        })
        .then(response=> response.json())
        .then(data=>{
            window.location.href = data.link;
        })
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
              Please fill out your order information
            </p>
          </div>
           {/* Form  */}
          <form className="space-y-6">
             {/* Email  */}
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email Address</label>
              <input
                type="text"
                id="email"
                className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="phone">Phone Number</label>
              <input
                type="text"
                id="phone"
                className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 sm:py-3 border border-transparent rounded-lg shadow-sm text-sm sm:text-base font-medium text-white bg-blue-700 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <span>Checkout</span>
            </button>
          </form>

        </div>
      </div>
    </div>
  )
}

export default CheckoutForm
