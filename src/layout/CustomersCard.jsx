import React from 'react'
import { RiDoubleQuotesL } from "react-icons/ri";


const CustomersCard = (props) => {
  return (
    <div className='rounded-3xl bg-white'>
      <div className='p-5 w-[570px]'>
        <RiDoubleQuotesL className='text-blue-600 h-10 w-10 ' />
        <p className='mt-3 ms-3 opacity-70 leading-6'>{props.text}</p>
      </div>
      <div className='mt-10 bg-[#CBD5E1] p-10'>
        <div className='flex justify-start gap-5 items-center'>
            <img src={props.img} alt="profile" className='rounded-full h-20 w-20'/>
            <div>
                <h3 className='font-bold'>{props.name}</h3>
                <h3 className='font-bold text-blue-500'>{props.desc}</h3>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CustomersCard
