import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            
            <Link href="/account" passHref>
              <span className="mr-4 cursor-pointer">Account</span>
            </Link>
            
            <Link href="/contact" passHref>
              <span className="mr-4 cursor-pointer">Contact Us</span>
            </Link>
           
            <Link href="/join" passHref>
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