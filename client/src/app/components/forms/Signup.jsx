import React from 'react'

function Signup() {
  return (
  <div className="flex items-center justify-center">
  <div className="w-full max-w-xs">
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <h2 className="text-center text-2xl font-bold mb-6">Sign Up</h2>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
        <input type="text" placeholder="Username"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
        <input type="email" placeholder="Email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
        <input type="password" placeholder="Password"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
      </div>
      <div className="flex items-center justify-center">
        <button type="submit"
          className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Sign Up</button>
      </div>
    </form>
  </div>
</div>
      
  )
}

export default Signup
