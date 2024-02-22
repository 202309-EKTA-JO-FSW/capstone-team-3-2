"use client"
import Test from "./components/Test";
import React from 'react';
import Navbar from '../app/components/Navbar';
import LandingNavbar from "./components/LandingNavbar";
//import { useClient } from 'next/client';
import '../style.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faSearch } from '@fortawesome/free-solid-svg-icons';
 

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {/* <Test /> */}
        
        <LandingNavbar/>
        <Navbar /> 
      </div>
    </main>
  );
}
