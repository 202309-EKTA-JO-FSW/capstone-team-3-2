"use client"
import Test from "./components/Test";
import Login from "./components/forms/Login";
import Signup from "./components/forms/Signup";
import React from 'react';
import Navbar from '../app/components/Navbar';
import LandingNavbar from "./components/LandingNavbar";
import '../style.css';
import SpecificPage from './components/specificRestaurant/Specific';

export default function Home() {
  
  return (

    <main>
      <div>
        <Test />
        <Login />
        <Signup />
        <LandingNavbar/>
        <Navbar /> 
        <SpecificPage />
        
      </div>
    </main>
  );
}
