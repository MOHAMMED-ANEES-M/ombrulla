import React from 'react'
import { BsArrowUpRight } from "react-icons/bs";

const ArrowButton = (props) => {
  return (
    <div className='cursor-pointer flex gap-0 font-semibold'>
      <p className='hover:text-blue-600 mt-2'>{props.title}</p>
      <BsArrowUpRight className='text-blue-700 h-6 w-6 mb-2'/>
    </div>
  )
}

export default ArrowButton
