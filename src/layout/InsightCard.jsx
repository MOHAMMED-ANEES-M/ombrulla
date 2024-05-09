import React from 'react'
import { FaCircleUser } from "react-icons/fa6";


const InsightCard = (props) => {
  return (
    <div>
      <img src={props.img} alt="" className='rounded-xl'/>
      <h2 className='font-semibold text-xl mt-5'>{props.heading}</h2>
      <p className='text-lg opacity-70 mt-5'>{props.text}</p>
      <div className={`${props.mt} flex gap-3 items-center `}>
        <FaCircleUser className='text-gray-400 h-10 w-10' />
        <div>
            <p className='font-semibold text-sm'>{props.name}</p>
            <p className='text-gray-400'>{props.time}</p>
        </div>
      </div>
    </div>
  )
}

export default InsightCard
