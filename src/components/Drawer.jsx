import React, { useState } from 'react'
import logo from '../assets/logo-ombrulla.svg'
import { AiFillPlusCircle } from "react-icons/ai";

const Drawer = () => {

    const [isServicesOpen,setIsServicesOpen] = useState(false)
    const [isProductsOpen,setIsProductsOpen] = useState(false)

  return (
    <div>
        <div class=" bg-white border-black ">

            <div className='bg-[#F3F4F6] p-5'>
                <img src={logo} alt="Ombrulla" className='m-auto object-contain h-20 w-40'/>
            </div>

            <div>
                <ul className='px-4 '>
                    <li className='p-4 border-b'>Home</li>
                    <li className='p-3 border-b flex gap-1 justify-between place-items-center' onClick={()=>{setIsServicesOpen(!isServicesOpen)}}>
                        <span>Services</span>
                        <AiFillPlusCircle className='text-blue-500 h-7 w-7'/>
                    </li>
                        { isServicesOpen && 
                            <ul className='ps-3'>
                                <li className='p-3 border-b'><a href="/ai-visual-inspection" >AI Visual Inspection</a></li>
                                <li className='p-3 border-b'><a href="/ai-infrastructure-inspection" >AI Infrastructure Inspection</a></li>
                                <li className='p-3 border-b'><a href="/ai-people-tracking">AI People Tracking</a></li>
                                <li className='p-3 border-b'><a href="/ai-data-analytics">AI Data Analytics</a></li>
                            </ul>
                        }
                    <li className='p-3 border-b flex gap-1 justify-between place-items-center' onClick={()=>{setIsProductsOpen(!isProductsOpen)}}>
                        <span>Product</span>
                        <AiFillPlusCircle className='text-blue-500 h-7 w-7'/>
                    </li>
                        { isProductsOpen && 
                            <ul className='ps-3'>
                                <li className='p-3 border-b'><a href="/ai-visual-inspection" >Asset perfomance Management</a></li>
                            </ul>
                        }
                    <li className='p-4 border-b'>About</li>
                    <li className='p-4 border-b'>Blog</li>
                    <li className='p-4 border-b'>Contact</li>
                </ul>
            </div>
    
        </div>

    </div>
  )
}

export default Drawer
