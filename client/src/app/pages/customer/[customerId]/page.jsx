"use client"
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from "next/navigation";
import Footer from '@/components/Footer';
import axios from "axios";
import style  from '../../../../creator.module.css';
import Navbar from '@/components/Navbar';
import withAuth from '@/components/withAuth';

function Page({signOut }) {

const params = useParams();
  const fileInputRef = useRef(null);
  const customerId = params.customerId;
  const [edit, setEdit] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const [updatedCustomer, setUpdatedCustomer] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    newpassword: "",
    confirmpassword: "",
    img: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        };
        
        console.log(token)
        const response = await fetch(`https://capstone-team-3-2.onrender.com/api/customer/profile/${customerId}`, {
          headers: headers,
        });
        console.log(customerId);
        if (response.ok) {
          const data = await response.json();
          setUpdatedCustomer({
            ...data,
            password: "",
          });
          console.log(data);
        } else {
          console.error("Failed to fetch customer profile");
        }
      } catch (error) {
        console.error("Error fetching customer profile:", error);
      }
    };

    fetchData();
  }, [customerId]);

  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleChange = (e) => {
    setUpdatedCustomer({ ...updatedCustomer, [e.target.name]: e.target.value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    let validData = true;
    try {
      if (!updatedCustomer.firstName || !updatedCustomer.lastName || !updatedCustomer.email) {
        validData = false;
        alert("Please check your information");
      }
      if (
        updatedCustomer.newpassword &&
        (updatedCustomer.newpassword !== updatedCustomer.confirmpassword ||
          updatedCustomer.newpassword.length < 8)
      ) {
        validData = false;
        alert("Wrong password");
      }
      if (validData) {
        const token = localStorage.getItem("token");
        const headers = {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        };
        const formData = new FormData();
        formData.append("firstName", updatedCustomer.firstName);
        formData.append("lastName", updatedCustomer.lastName);
        formData.append("email", updatedCustomer.email);
        formData.append("password", updatedCustomer.password);
        formData.append("confirmpassword", updatedCustomer.confirmpassword);
        formData.append("newpassword", updatedCustomer.newpassword);
        formData.append("phone", updatedCustomer.phone);
        formData.append("img", updatedCustomer.img);

        const response = await axios.put(`https://capstone-team-3-2.onrender.com/api/customer/profile/${customerId}`, formData, { headers });
        if (response.status === 201) {
          setEdit(false);
          alert(`Updated successfully!`);
          setUpdatedCustomer({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            newpassword: "",
            confirmpassword: "",
          });
        } else {
          console.error("Failed to update customer info");
        }
      }
    } catch (error) {
      console.error("Error updating customer info:", error);
    }
  };
  const handleFileChange = (e) => {
    setImageSrc(URL.createObjectURL(e.target.files[0]));
    setUpdatedCustomer({ ...updatedCustomer, [e.target.name]: e.target.files[0] });
  };

//   const handleSavebtn = async (e) => {
//     e.preventDefault();
//     const confirmed = window.confirm("Are you sure you want to save changes?");
//     if (!confirmed) return; 
    
//     let validData = true;
//     try {
//     } catch (error) {
//       console.error("Error", error);
//     }
//   };
  
    
    return (
       
    <div>
        <Navbar />
        <button onClick={signOut}>Click me to sign out</button>
        
      <div className="flex flex-col items-center">
        <form onSubmit={handleSave} className="mt-8">
          <div className="mb-4">
          <img 
            src={
                imageSrc
                ? imageSrc
                : updatedCustomer && updatedCustomer.img 
                ? URL.createObjectURL(updatedCustomer.img)
                : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            }
            alt="profile"
            onClick={() => {
                fileInputRef.current.click();
            }}
            className={style.imgg}
            />
            <input type="file" ref={fileInputRef} onChange={handleFileChange} id="profilePicture" name="img" accept="image/*" disabled={!edit}/>
          </div>
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name:</label>
            <input type="text" id="firstName" name="firstName" value={updatedCustomer.firstName} onChange={handleChange} disabled={!edit} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Phone Number:</label>
            <input type="text" id="phone" name="phone" value={updatedCustomer.phone} onChange={handleChange} disabled={!edit} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
          </div>
          
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name:</label>
            <input type="text" id="lastName" name="lastName" value={updatedCustomer.lastName} onChange={handleChange} disabled={!edit} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
          </div>
          
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
            <input type="email" id="email" name="email" value={updatedCustomer.email} onChange={handleChange} disabled={!edit} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
            <input type="password" id="password" name="password" value={updatedCustomer.password} onChange={handleChange} disabled={!edit} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
          </div>
          <div className="mb-4">
            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">New Password:</label>
            <input type="password" id="newPassword" name="newPassword" value={updatedCustomer.newpassword} onChange={handleChange} disabled={!edit} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" value={updatedCustomer.confirmpassword} onChange={handleChange} disabled={!edit} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
          </div>
          <button type="button" onClick={handleEdit}   className="mb-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">{edit ? 'Cancel' : 'Edit'}</button>
          {edit && <button type="submit"  className="mb-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save Changes</button>}
        </form>
      </div>
      <Footer />
    </div>
    );
};

export default withAuth (Page);