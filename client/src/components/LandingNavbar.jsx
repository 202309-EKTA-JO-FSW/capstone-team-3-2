import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { LoginButton, SignupButton } from "@/components/auth/login-button";



const LandingNavbar = () => {
  return (
    <nav className="bg-gray-800 h-20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="font-bold font-poppins text-white mr-4 neon-text text-2xl leading-14">DishDash</span>
            </div>
          </div>
          <div className="flex">
            <LoginButton >
              <Button className="mr-4 cursor-pointer absolute top-18 left-60 w-36 h-16 px-2 border-0 rounded-lg bg-gray-900 text-white text-lg font-poppins font-semibold leading-7 focus:outline-none" variant='ghost' size='sm'>Sign in</Button>
            </LoginButton>
            <SignupButton >
              <Button className="cursor-pointer absolute top-18 left-72 w-36 h-16 px-2 border-0 rounded-lg bg-gray-900 text-white text-lg font-poppins font-semibold leading-7 focus:outline-none" variant='ghost' size='sm'>Sign up</Button>
            </SignupButton>

          </div>
        </div>
      </div>


    </nav>

  );
};

export default LandingNavbar;