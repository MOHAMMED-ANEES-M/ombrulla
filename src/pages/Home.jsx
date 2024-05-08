import React from 'react'
import Button from '../layout/Button'
import hero from '../assets/hero.webp'
import '../styles/Home.css'
import { BiPlayCircle } from 'react-icons/bi'

const Home = () => {
  return (
    <div>
      
      <section>
        <div className='flex flex-wrap justify-evenly mt-10'>
            <div className='w-[40%] mt-10'>
                <h1 className='font-bold text-[3.5rem] leading-tight'>Manual <br /> Inspection is <br />
                    <span className='text-blue-600 font-semibold'>Slow & Error-Prone</span>
                </h1>
                <p className='mt-5'>AI-powered visual inspection, leveraging computer vision, transforms manufacturing inspection procedures, boosting precision and cost-effectiveness while upholding product excellence. This AI inspection system detects defects with exceptional accuracy, optimizing the overall inspection process.</p>
                <div className='mt-5 flex gap-3 place-items-center'>
                    <Button title='Schedule Call' />
                    <BiPlayCircle fill='blue'  className='h-10 w-10 cursor-pointer'/> 
                    <span className='font-semibold hover:text-blue-600 cursor-pointer'>Watch Video</span>
                </div>
            </div>
            <div className='w-[40%] '>
                
                <img src={hero} alt=""  className='hero-img h-full w-[90%]'/>
            </div>
        </div>
      </section>

    </div>
  )
}

export default Home
