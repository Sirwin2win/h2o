import React from 'react'

const Login = () => {
  return (
    <main className="container mx-auto p-4 mt-12 bg-white flex flex-col items-center justify-center text-gray-700">
    <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-4">
        <h1 className="text-2xl font-bold text-blue-700">Welcome back.</h1>
    </div>
    <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-6">
        <input className="mb-4 p-2 appearance-none block w-full bg-blue-200 placeholder-blue-900 rounded border focus:border-blue-500" type="text" placeholder="Email"/>
        <input className="mb-4 p-2 appearance-none block w-full bg-blue-200 placeholder-blue-900 rounded border focus:border-blue-500" type="text" placeholder="Password"/>
        <div className="flex items-center">
            <div className="w-1/2 flex items-center">
                <input id="remember-me" type="checkbox" className="mt-1 mr-2" />
                <label htmlFor="remember-me" className='text-blue-700'>Remember me!</label>
            </div>
            <button className="ml-auto w-1/2 bg-blue-700 text-white p-2 rounded font-semibold hover:bg-gray-900" type="submit">Log In</button>
        </div>
    </div>
</main>
  )
}

export default Login