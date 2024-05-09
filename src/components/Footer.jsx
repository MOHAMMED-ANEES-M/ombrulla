import React from 'react'
import { MdOutlineFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className='bg-[#102140] mt-32'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pt-28 px-20'>
        <div>
            <h1 className='text-2xl text-white font-semibold'>About Us</h1>
            <p className='text-white mt-10 opacity-70 text-justify'>Ombrulla is an AI-driven company providing specialized services like AI Visual Inspection, AI People Tracking, AI Defect Detection, AI Infrastructure Inspection, and AI Data Analytics. Our tailored solutions empower businesses with data-driven decisions, automation, and improved bottom lines. PETRAN, our cutting-edge tracking solution, utilizes AI and IoT to monitor assets, machinery, equipment, people, and facilities, enabling comprehensive performance management and environmental sustainability.</p>
        </div>
        <div>
            <h1 className='text-2xl text-white font-semibold'>Our Services</h1>
            <p className='text-white mt-10 opacity-70 text-justify'>AI Infrastructure Inspection</p>
            <p className='text-white mt-5 opacity-70 text-justify'>AI Visual Inspection</p>
            <p className='text-white mt-5 opacity-70 text-justify'>AI Data Analytics</p>
            <p className='text-white mt-5 opacity-70 text-justify'>AI People tracking</p>
        </div>
        <div>
            <h1 className='text-2xl text-white font-semibold'>Our Solutions</h1>
            <p className='text-white mt-10 opacity-70 text-justify'>Asset Perfomance Management</p>
            <p className='text-white mt-5 opacity-70 text-justify'>RTLS - Workplace Safety</p>
            <p className='text-white mt-5 opacity-70 text-justify'>Environmental Sustainability</p>
        </div>
        <div>
            <h1 className='text-2xl text-white font-semibold'>Reach Us</h1>
            <p className='text-white mt-10 opacity-70 text-justify'>United Kingdom, 7 Bell Yard <br /> London, WC2A 2JR <br /> +44 7879993892</p>
            <p className='text-white mt-10 opacity-70 text-justify'>Germany, Schützenstraße 51A <br /> Lübeck, 23558 <br /> +49 179 512 5812</p>
            <p className='text-white mt-10 opacity-70 text-justify'>India, No. 154/20, Royal Space <br /> Third Floor TI, HSR Layout, <br /> Bangalore, Karnataka <br /> 560102 <br /> +91 85900 56435</p>
        </div>
      </div>
      <div className='flex gap-10 text-white justify-center mt-10 lg:mt-0'>
        <MdOutlineFacebook className='h-6 w-6'/>
        <FaInstagram className='h-6 w-6'/>
        <FaTwitter className='h-6 w-6'/>
        <FaLinkedinIn className='h-6 w-6'/>
        <FaYoutube className='h-6 w-6'/>
      </div>
      <p className='mt-20 text-xs text-white opacity-50'>© 2020 Ombrulla, Inc. All rights reserved.</p>
    </footer>
  )
}

export default Footer
