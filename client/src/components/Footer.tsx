import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            
            <Link href="/pages/AboutPage" passHref>
              <span className="mr-4 cursor-pointer">About Us</span>
            </Link>
            
            <Link href="/pages/ContactUs" passHref>
              <span className="mr-4 cursor-pointer">Contact Us</span>
            </Link>
           
            <Link href="/auth/register/restaurant" passHref>
              <span className="cursor-pointer">Join Us</span>
            </Link>
          </div>
          <div>
            <p>© 2024 DishDash. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 