import React from 'react'
import { RiDoubleQuotesL } from "react-icons/ri";


const CustomersCard = (props) => {
  return (
    <div className='rounded-3xl bg-white'>
      <div className='p-2 sm:p-5 w-[315px] sm:w-[570px]'>
        <RiDoubleQuotesL className='text-blue-600 sm:h-10 sm:w-10 ' />
        <p className='mt-1 sm:mt-3 ms-3 text-sm sm:text-base opacity-70 leading-5 sm:leading-6'>{props.text}</p>
      </div>
      <div className='mt-3 sm:mt-10 bg-[#CBD5E1] p-5 sm:p-10'>
        <div className='flex justify-start gap-2 sm:gap-5 items-center'>
            <img src={props.img} alt="profile" className='rounded-full h-10 w-10 sm:h-20 sm:w-20'/>
            <div>
                <h3 className='font-bold text-sm sm:text-base'>{props.name}</h3>
                <h3 className='font-bold text-sm sm:text-base text-blue-500'>{props.desc}</h3>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CustomersCard
