import React from 'react';
import Link from 'next/link';



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
            <Link href="/login">
              <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                Login
              </span>
            </Link>
            <Link href="/signup">
              <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                Signup
              </span>
            </Link>
          </div>
        </div>
      </div>
      
      
    </nav>
    
  );
};

export default LandingNavbar;