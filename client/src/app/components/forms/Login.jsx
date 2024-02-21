import React from 'react';

const LoginForm = () => {


  return (
    <div className="flex items-center justify-cent er ">
      <form className="bg-white shadow-md rounded px-9 pt-10 pb-8 mb-4">
        <h2 className="text-center text-2xl font-bold mb-6">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input type="email" required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your email"/>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input type="password" placeholder="Enter your password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;