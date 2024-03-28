
"use client"
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from "next/navigation";
import EditableCustomerProfile from './components/EditableCustomerProfile'

function Page() {

const params = useParams();
  const customerId = params.customerId;
  const [edit, setEdit] = useState(false);
  const [updatedCustomer, setUpdatedCustomer] = useState({
    avatar:"",
    balance:"",
    buildingNo: "",
    createdAt:"",
    email: "",
    firstName: "",
    lastName: "",
    location:"",
    password: "",
    phone:"",
    newpassword: "",
    confirmpassword: "",
    role: "",
    street: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        };
        
        const response = await fetch(`https://capstone-team-3-2.onrender.com/api/customer/profile/${customerId}`, {
          headers: headers,
        });
        if (response.ok) {
          const data = await response.json();
          setUpdatedCustomer({
            ...data,
            password: "",
          });
        } else {
          console.error("Failed to fetch customer profile");
        }
      } catch (error) {
        console.error("Error fetching customer profile:", error);
      }
    };

    fetchData();
  }, [customerId, edit]);
  
    return (
       
   
    <div>
    <EditableCustomerProfile CustomerProfile={updatedCustomer} customerId={customerId}/>
    </div>
    );
};

export default Page
