"use client"
import Test from "./components/Test";
import React from 'react';
//import Navbar from '../app/components/Navbar';
import LandingNavbar from "./components/LandingNavbar";
//import LandingPage from "../pages/LandingPage";
import '../style.css';
import LandingPage from "@/pages/LandingPage";
 

export default function Home() {
  
  return (
    <main className=" bg-gray-200 flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {/* <Test /> */}
        {/*<LandingNavbar/>*/}
        {/*<Navbar /> */ }
        <LandingPage/>
      
      </div>
    </main>
  );
}
