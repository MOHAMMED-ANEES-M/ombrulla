import React from 'react'
import { FaPlay } from "react-icons/fa";


const VideoButton = (props) => {
  return (
    <div className='flex gap-5 place-items-center cursor-pointer'>
      <div className='bg-blue-600 text-white rounded-full border-white p-5 border hover:text-blue-600 hover:bg-white hover:border-black' >
            <FaPlay className=' h-5 w-5 '/>
      </div>
      <p className='font-semibold hover:text-blue-600 cursor-pointer'>{props.title}</p>
    </div>
  )
}

export default VideoButton
