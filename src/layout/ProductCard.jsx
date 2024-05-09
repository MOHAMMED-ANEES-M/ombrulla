import React from 'react'
import ArrowButton from './ArrowButton'

const ProductCard = (props) => {
  return (
    <div className='bg-[#EFF1F5] rounded-3xl p-10'>
      <h1 className='text-2xl'>{props.heading}</h1>
      <p className={`${props.mt} opacity-70`}>{props.text}</p>
      <img src={props.img} alt="image" className='mt-12 mb-10 h-36 w-36 m-auto'/>
      <ArrowButton title='Book For Demo' />
    </div>
  )
}

export default ProductCard
