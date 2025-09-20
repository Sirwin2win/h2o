import React from 'react'
import { Link } from 'react-router-dom'

const LoginForm = () => {
  return (
     <div class="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <div
          class="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
           {/* Header */}
          <div class="text-center mb-8">
            <h2 class="text-2xl sm:text-3xl font-bold text-blue-700">
              Welcome Back
            </h2>
            <p class="mt-2 text-sm sm:text-base text-gray-600">
              Please sign in to your account
            </p>
          </div>

           {/* Form  */}
          <form class="space-y-6">
             {/* Email  */}
            <div>
              <label class="block text-sm font-medium text-gray-700" for="email">Email Address</label>
              <input
                type="email"
                id="email"
                class="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-blue-500"
                required
              />
            </div>

             {/* Password  */}
              <div>
              <label class="block text-sm font-medium text-gray-700" for="password">Password</label>
              <input
                type="text"
                id="password"
                class="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-blue-500"
                required
              />
            </div>
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  class="h-4 w-4 text-blue-700 focus:ring-blue-700 border-gray-300 rounded"
                />
                <label for="remember" class="ml-2 block text-sm text-gray-700">Remember me</label>
              </div>
              <a href="#" class="text-sm text-blue-700 hover:text-blue-700">Forgot password?</a>
            </div>

            <button
              type="submit"
              class="w-full flex justify-center py-2 px-4 sm:py-3 border border-transparent rounded-lg shadow-sm text-sm sm:text-base font-medium text-white bg-blue-700 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <span>Sign In</span>
            </button>
          </form>

          <p class="mt-6 text-center text-sm">
            Don't have an account?
            <Link to={'/register'} class="font-medium text-blue-700 hover:text-blue-700">Sign up now</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginForm