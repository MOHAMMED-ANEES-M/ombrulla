import React from 'react';
import { useState } from 'react';
import logo from '../assets/logo-ombrulla.svg'
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import Drawer from './Drawer';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <>
    <nav>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 px-1 sm:px-7 font-bold place-items-center">

          <div className="flex-shrink-0 flex items-center">
            <img className="h-8 w-auto" src={logo} alt="Logo" />
          </div>

          <div className="hidden sm:flex text-sm lg:text-base space-x-4 items-center justify-end lg:space-x-10 ">
            <a href="/" className="nav-link hover:text-blue-500">Home</a>
            <div className="dropdown relative" 
              onMouseEnter={()=>{setIsServicesOpen(!isServicesOpen)}}
              onMouseLeave={()=>{setIsServicesOpen(!isServicesOpen)}}>
              <div className='flex place-items-center gap-1 hover:text-blue-500'>
                <button className="nav-link ">Services</button> 
                <IoIosArrowDown />
              </div>
              <button className='block opacity-0 fixed z-0'>Services</button>
                { isServicesOpen && 
                <ul className="dropdown-options fixed top-16 bg-white z-10 ">
                    <li className='p-5 px-8 border-b font-semibold hover:text-blue-500'><a href="/ai-visual-inspection" >AI Visual Inspection</a></li>
                    <li className='p-5 px-8 border-b font-semibold hover:text-blue-500'><a href="/ai-infrastructure-inspection" >AI Infrastructure Inspection</a></li>
                    <li className='p-5 px-8 border-b font-semibold hover:text-blue-500'><a href="/ai-people-tracking">AI People Tracking</a></li>
                    <li className='p-5 px-8 border-b font-semibold hover:text-blue-500'><a href="/ai-data-analytics">AI Data Analytics</a></li>
                </ul>
                }
            </div>
            <div className="dropdown relative" 
              onMouseEnter={()=>{setIsProductsOpen(!isProductsOpen)}}
              onMouseLeave={()=>{setIsProductsOpen(!isProductsOpen)}}>
              <div className='flex place-items-center gap-1 hover:text-blue-500'>
                <button className="nav-link ">Product</button> 
                <IoIosArrowDown />
              </div>
              <button className='block opacity-0 fixed z-0'>Products</button>
                { isProductsOpen && 
                <ul className="dropdown-options fixed top-16 bg-white z-10 ">
                    <li className='p-5 px-8 border-b font-semibold hover:text-blue-500'><a href="/ai-visual-inspection" >Asset Perfomance Management</a></li>
                </ul>
                }
            </div>
            <a href="https://www.ombrulla.com/about" className="nav-link hover:text-blue-500">About</a>
            <a href="https://blog.ombrulla.com/" className="nav-link hover:text-blue-500">Blog</a>
            <a href="/contact" className="nav-link hover:text-blue-500">Contact</a>
          </div>

          <div className="flex sm:hidden justify-end">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 "
            >
                {isMenuOpen ? (
                    <MdClose className='text-blue-500 h-8 w-8 z-50'/>
                ) : (
                    <FiMenu className='text-blue-500 h-8 w-8'/>
                )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className={`sm:hidden fixed z-50 inset-0 shadow bg-white w-[75%] drawer  ${isMenuOpen ? 'block' : 'hidden'}`}>
            <Drawer />
        </div>
      )}
    </nav>
    
    </>
  );
};

export default Navbar;
