"use client"
import { Button } from "@/components/ui/button"
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { LoginButton } from "@/components/auth/login-button";
import LandingNavbar from '@/components/LandingNavbar'
import Navbar from '@/components/Navbar'
import LandingPage from '@/app/pages/LandingPage'

import '../style.css';


const font = Poppins({
  subsets: ['latin'],
  weight: ['600']
})
export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">

      <div >
        


        <LandingNavbar />
        
        <LandingPage />
        
      </div>
    </main >
  );
}
