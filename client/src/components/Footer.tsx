import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {



  return (
    <footer className="bg-gray-200 text-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-0 md:mb-0 ">

            <Link href="/pages/AboutPage">
              <span className="mr-4 cursor-pointer">About Us</span>
            </Link>

            <Link href="/pages/ContactUs" >
              <span className="mr-4 cursor-pointer">Contact Us</span>
            </Link>

            <Link href="/auth/register/restaurant" >
              <span className="cursor-pointer">Join Us</span>
            </Link>
          </div>
          <div>
            <p>© 2024 DishDash. All rights reserved.</p>
          </div>
        </div>
      </div>
      <div className="mb-0 mt-2 flex justify-center">
        <div className="mb-0 mr-4 flex items-center justify-between ml-4 mt-0 text-center">
          <div className="mb-2  mr-4 mt-0 text-center">
            <p>Lubna Abdelkhaliq</p>
            <div className="mt-2 flex">
              <a href="https://www.linkedin.com/in/lubna-abdelkhaliq-09020a18b/" className="mr-2" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={20} />
              </a>
              <a href="https://github.com/Lubnaabd" target="_blank" rel="noopener noreferrer" className='pr-5'>
                <FaGithub size={20} />
              </a>
            </div>
          </div>
          <div className="mb-2 mr-4 text-center">
            <p>Ahmad Shalash</p>
            <div className="mt-2 flex">
              <a href="https://www.linkedin.com/in/matt-shal/" className="mr-2" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={20} />
              </a>
              <a href="https://github.com/mattshal1" target="_blank" rel="noopener noreferrer" className='pr-5'>
                <FaGithub size={20} />
              </a>
            </div>
          </div>
          <div className="mb-2 mr-4 text-center">
            <p>Sanad Alshobaki</p>
            <div className="mt-2 flex">
              <a href="https://www.linkedin.com/in/sanad-alshobaki/" className="mr-2" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={20} />
              </a>
              <a href="https://github.com/sanad-alshobaki" target="_blank" rel="noopener noreferrer" className='pr-5'>
                <FaGithub size={20} />
              </a>
            </div>
          </div>
          <div className="mb-2 mr-4 text-center">
            <p>Farah Arar</p>
            <div className="mt-2 flex">
              <a href="" className="mr-2" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={20} />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer" className='pr-5'>
                <FaGithub size={20} />
              </a>
            </div>
          </div>

          <div className="mb-2 mr-4 text-center">
            <p>Wajd Alkilani</p>
            <div className="mt-2 flex">
              <a href="" className="mr-2" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={20} />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer" className='pr-5'>
                <FaGithub size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 