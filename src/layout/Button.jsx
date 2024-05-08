import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className='bg-blue-600 rounded-full px-8 py-4 text-white font-bold'>
        {props.title}
      </button>
    </div>
  )
}

export default Button
