import React, { useState } from 'react';

function Signup() {

  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [phoneNumber, setPhoneNumber] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const createUser = () => {
  //   fetch("http://localhost:3001/users", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       firstName: firstName,
  //       lastName: lastName,
  //       phoneNumber: phoneNumber ,
  //       email: email,
  //       password: password,
  //     }),
  //   })
  //     .then((res) => {
  //       if (res.ok) {
  //         console.log("User created");
  //       } else {
  //         console.error("Failed to create user");
  //       }
  //     })
  //     .catch((e) => {
  //       console.error("Error message:", e);
  //     });
  // };
  
  // createUser();


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-18">
      <div className="w-full max-w-md">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-center text-2xl font-bold mb-6">Sign Up</h2>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">First Name</label>
            <input type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Last Name</label>
            <input type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="phone_number">Phone Number</label>
            <input type="tel" id="phone_number" placeholder="Phone Number" onChange={(e) => setPhoneNumber(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          </div>

          <div className="flex items-center justify-center">
            <button type="submit" onClick={createUser}
              className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Signup;

