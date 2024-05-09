import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className={`${props.bg} rounded-full py-3 text-sm sm:text-base px-4 sm:px-8 sm:py-4 border border-white text-white font-semibold hover:text-blue-600 hover:bg-white hover:${props.border}`}>
        Schedule call
      </button>
    </div>
  )
}

export default Button
