import React from 'react'
import { GoSquareFill } from "react-icons/go";


const Heading1 = (props) => {
  return (
    <div>
      <div className='flex gap-5 place-items-end mb-5'>
        <GoSquareFill className='text-blue-600'/>
        <p className='font-bold text-sm '>{props.title}</p>
      </div>
        <h1 className='font-medium text-[2.5rem] leading-tight'>{props.heading}</h1>
    </div>
  )
}

export default Heading1
