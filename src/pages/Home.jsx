import React from 'react'
import Button from '../layout/Button'
import hero from '../assets/hero.webp'
import aivisualinspection from '../assets/ai-visual-inspection.webp'
import aivisualinfrastructure from '../assets/AI-INFRASTRUCTURE-INSPECTION.webp'
import '../styles/Home.css'
import VideoButton from '../layout/VideoButton'
import Heading1 from '../layout/Heading1'
import ArrowButton from '../layout/ArrowButton'

const Home = () => {
  return (
    <div>
      
      <section>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mx-20 flex-wrap justify-between'>
            <div className=' mt-20'>
                <h1 className='font-bold text-[3.5rem] leading-tight'>Manual <br /> Inspection is 
                    <span className='text-blue-600 font-semibold leading-tight lg:block'> Slow & Error-Prone</span>
                </h1>
                <p className='mt-5 opacity-70 text-lg'>AI-powered visual inspection, leveraging computer vision, transforms manufacturing inspection procedures, boosting precision and cost-effectiveness while upholding product excellence. This AI inspection system detects defects with exceptional accuracy, optimizing the overall inspection process.</p>
                <div className='mt-5 flex gap-10 place-items-center'>
                    <Button />
                    <VideoButton title='Watch Video'/>
                </div>
            </div>
            <div className=' '>
              <img src={hero} alt=""  className=' hero-img h-full min-h-[3rem] w-[90%]'/>
            </div>
        </div>
      </section>

      <section className='leader mx-16 mt-32 rounded-3xl p-10'>
        <div className='mx-44 '>
          <Heading1 title='Leader in AI visual inspection'/>
          <h1 className='mb-10 font-semibold text-[3.5rem] leading-tight'>Crafting Tomorrow's <br /> World with
        <span className='text-blue-600 font-normal leading-tight '> AI Excellence</span>
      </h1>
      <p className='mb-5 opacity-70 text-lg'>Leveraging AI, Ombrulla empowers clients with data-driven insights and automation, extracting valuable information from various sources like photos, videos, and data lakes. Our AI visual inspection system enables businesses to enhance their bottom line through precise defect detection and actionable insights.</p>
        <VideoButton title='Watch Corporate Video'/>
        </div>
      </section>

      <section className='mt-32 mx-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          <div>
            <Heading1 title='AI VISUAL INSPECTION' heading='Enhancing quality through AI-based visual inspection'/>
            <p className='mt-3 opacity-70 '>Ombrulla transforms quality control across manufacturing and various sectors through its AI-driven defect detection system, replacing traditional visual inspection. This AI visual inspection not only eradicates human errors and delays but also elevates precision, culminating in a streamlined and accurate quality control process.</p>
            <ul className='mt-3 mb-5 list-disc opacity-70 text-lg mx-10'>
              <li>AI visual inspection ensures consistent performance with unmatched accuracy</li>
              <li>It boosts throughput and cuts down on labour expenses</li>
              <li>By minimizing recalls and rework, AI inspection enhances brand reputation</li>
              <li>Real-time data and analytics enable scalability in AI-based visual inspection</li>
            </ul>
            <div className='mt-3 flex gap-10 place-items-center'>
              <Button />
              <ArrowButton title='Read more'/>
            </div>
          </div>
          <div>
            <img src={aivisualinspection} alt="AI viusal inspection" className='rounded-3xl mt-10 m-auto h-[75%]'/>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-10'>
          <div>
            <img src={aivisualinfrastructure} alt="AI viusal inspection" className='rounded-3xl mt-10 m-auto h-[75%]'/>
          </div>
          <div>
            <Heading1 title='AI INFRASTRUCTURE INSPECTION' heading='Enhances Efficiency, Safety, and Cost-Effectiveness'/>
            <p className='mt-3 opacity-70 '>Ombrulla's AI Infrastructure Inspection utilizes AI drone inspections for real-time insights, transforming the way we inspect critical infrastructure. This AI inspection technology enhances efficiency, safety, and cost-effectiveness, all while ensuring longevity and reducing risks. By leveraging AI in Infrastructure, Ombrulla empowers better infrastructure management with increased reliability and responsiveness.</p>
            <ul className='mt-3 mb-5 list-disc opacity-70 text-lg mx-10'>
              <li>Precision: AI infrastructure solutions ensure accurate defect detection, minimizing oversight</li>
              <li>Efficiency: Automating inspections with AI drone technology saves time and resources</li>
              <li>Predictive Maintenance: AI-driven analysis predicts maintenance needs, preventing costly breakdowns.</li>
              <li>Safety: AI inspections in infrastructure reduce manual work in hazardous areas, enhancing worker safety</li>
            </ul>
            <div className='mt-3 flex gap-10 place-items-center'>
              <Button />
              <ArrowButton title='Read more'/>
            </div>
          </div>
        </div>
      </section>

      <section className='mt-32 mb-10'>
        <div className='petran p-60'>
          <p>dfd</p>
          <p>dfd</p>
          <p>dfd</p>
          <p>dfd</p>
          <p>dfd</p>
          <p>dfd</p>
          <p>dfd</p>
          <p>dfd</p>
          <p>dfd</p>
          <p>dfd</p>
          <p>dfd</p>
        </div>
      </section>

    </div>
  )
}

export default Home
