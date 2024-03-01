import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { LoginButton, SignupButton } from "@/components/auth/login-button";



const LandingNavbar = () => {
  return (
    <nav className="bg-gray-800 h-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-white mr-4 neon-text">DishDash</span>
            </div>
          </div>
          <div className="flex">
            <LoginButton >
              <Button variant='ghost' size='sm'>Sign in</Button>
            </LoginButton>
            <SignupButton >
              <Button variant='ghost' size='sm'>Sign up</Button>
            </SignupButton>

          </div>
        </div>
      </div>


    </nav>

  );
};

export default LandingNavbar;