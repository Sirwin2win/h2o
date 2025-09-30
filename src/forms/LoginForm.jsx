import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../features/auth/authSlice";



const LoginForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
    const auth = useSelector((state) => state.auth)
     const { user, loading, error } = useSelector((state) => state.auth);


 useEffect(() => {
    if (user) {
      // Redirect to dashboard after successful login
      navigate('/sidebar');
    }
  }, [user, navigate]);

  
    const [form, setForm] = useState({
      email: '',
      password: '',
    })
  
    const handleChange = (e) =>
      setForm({ ...form, [e.target.name]: e.target.value })
  
    const handleSubmit = (e) => {
      e.preventDefault()
      console.log(form)
      dispatch(login(form))
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
              Please sign in to your account
            </p>
          </div>

           {/* Form  */}
          <form className="space-y-6">
             {/* Email  */}
              {auth.error && <p style={{ color: 'red' }}>{auth.error}</p>}
            <div>
              <label className="block text-sm font-medium text-gray-700" for="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-blue-500"
                required
              />
            </div>
             {/* Password  */}
              <div>
              <label className="block text-sm font-medium text-gray-700" for="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-blue-500"
                required
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 text-blue-700 focus:ring-blue-700 border-gray-300 rounded"
                />
                <label for="remember" className="ml-2 block text-sm text-gray-700">Remember me</label>
              </div>
              <Link to={'/reset-email'} className="text-sm text-blue-700 hover:text-blue-700">Forgot password?</Link>
            </div>
                <button
              type="submit"
              disabled={auth.status === 'loading'}
              onClick={handleSubmit}
              className="w-full flex justify-center py-2 px-4 sm:py-3 border border-transparent rounded-lg shadow-sm text-sm sm:text-base font-medium text-white bg-blue-700 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <span> {auth.status === 'loading' ? 'Login you in...' : 'Login'}</span>
            </button>
          </form>
          <p className="mt-6 text-center text-sm">
            Don't have an account?
            <Link to={'/register'} className="font-medium text-blue-700 hover:text-blue-700">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
export default LoginForm