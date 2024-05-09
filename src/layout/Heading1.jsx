import React from 'react'
import { GoSquareFill } from "react-icons/go";


const Heading1 = (props) => {
  return (
    <div className={`${props.double ? 'text-center' : ''}`}>
      <div className={`flex gap-5 ${props.double ? 'place-items-center justify-center' : 'place-items-end'} mb-5`}>
        <GoSquareFill className='text-blue-600'/>
        <p className={`font-bold text-sm ${props.titleColor}`}>{props.title}</p>
        { props.double  && <GoSquareFill className='text-blue-600'/> }
      </div>
        <h1 className={`font-medium text-[2.5rem] leading-tight ${props.headingColor}`}>{props.heading}</h1>
    </div>
  )
}

export default Heading1
