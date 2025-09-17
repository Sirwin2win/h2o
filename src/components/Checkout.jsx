import React, { useState } from 'react'

const Checkout = () => {
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
    <div class="container mx-auto p4-10">
    <div class="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-xl">
        <div class="md:flex">
            <div class="w-full px-6 py-8 md:p-8">
                <h2 class="text-2xl font-bold text-gray-800 text-center">Checkout</h2>
                <p class="mt-4 text-gray-600">Please fill out the form below to complete your purchase.</p>
                <form class="mt-6">
                    <div class="mb-6">
                        <label class="block text-gray-800 font-bold mb-2" for="name">
                            Name
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="John Doe" />
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-800 font-bold mb-2" for="email">
                            Email
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="johndoe@example.com" />
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-800 font-bold mb-2" for="card_number">
                            Phone Number
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="card_number" type="text" placeholder="+234" />
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-800 font-bold mb-2" for="expiration_date">
                            Address
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="expiration_date" type="text" placeholder="plot 234 4th Ave" />
                    </div>
                  
                    <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    </div>
</div>
  )
}

export default Checkout
