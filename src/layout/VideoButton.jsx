import React from 'react'
import { FaPlay } from "react-icons/fa";


const VideoButton = (props) => {
  return (
    <div className='flex gap-2 sm:gap-5 place-items-center cursor-pointer'>
      <div className={`bg-blue-600 text-white rounded-full border-white p-3 sm:p-5 border hover:${props.colorHover} hover:${props.bgHover} hover:${props.border}`} >
            <FaPlay className='h-3 w-3 sm:h-5 sm:w-5 '/>
      </div>
      <p className={`font-semibold text-sm sm:text-base ${props.color} hover:${props.colorHover} cursor-pointer`}>{props.title}</p>
    </div>
  )
}

export default VideoButton
