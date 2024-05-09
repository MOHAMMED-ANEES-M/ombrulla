import React from 'react'
import Button from '../layout/Button'
import hero from '../assets/hero.webp'
import aivisualinspection from '../assets/ai-visual-inspection.webp'
import aivisualinfrastructure from '../assets/AI-INFRASTRUCTURE-INSPECTION.webp'
import petrantext from '../assets/petran-text.webp'
import petran from '../assets/petran.webp'
import cardimage1 from '../assets/products-card1.webp'
import cardimage2 from '../assets/products-card2.webp'
import alhua from '../assets/brand-alhua.webp'
import amazon from '../assets/brand-amazon.webp'
import azure from '../assets/brand-azure.webp'
import hikvision from '../assets/brand-hikvision.webp'
import nvidia from '../assets/brand-nvidia.webp'
import unv from '../assets/brand-unv.webp'
import insightcard1 from '../assets/insights-card1.png'
import insightcard2 from '../assets/insights-card2.png'
import insightcard3 from '../assets/insights-card3.png'
import '../styles/Home.css'
import VideoButton from '../layout/VideoButton'
import Heading1 from '../layout/Heading1'
import ArrowButton from '../layout/ArrowButton'
import ProductCard from '../layout/ProductCard'
import Carousal from '../layout/Carousal'
import CustomersCard from '../layout/CustomersCard'
import CustomersCarousel from '../layout/CustomersCarousal'
import InsightCard from '../layout/InsightCard'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      
      {/* Main part */}
      <section>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-20 mx-5 sm:mx-20 flex-wrap justify-between'>
            <div className=' mt-20'>
                <h1 className='font-bold text-[3rem] sm:text-[3.5rem] leading-tight'>Manual <br /> Inspection is 
                    <span className='text-blue-600 font-normal leading-tight lg:block'> Slow & Error-Prone</span>
                </h1>
                <p className='mt-5 opacity-70 text-lg'>AI-powered visual inspection, leveraging computer vision, transforms manufacturing inspection procedures, boosting precision and cost-effectiveness while upholding product excellence. This AI inspection system detects defects with exceptional accuracy, optimizing the overall inspection process.</p>
                <div className='mt-5 flex gap-5 sm:gap-10 place-items-center'>
                    <Button bg='bg-blue-600' border='border-black'/>
                    <VideoButton title='Watch Video' colorHover='text-blue-600' bgHover='bg-white' border='border-black'/>
                </div>
            </div>
            <div className=' '>
              <img src={hero} alt="inspector-image"  className=' hero-img h-full min-h-[3rem] w-[90%]'/>
            </div>
        </div>
      </section>

      {/* Leader in AI visual inspection part */}
      <section className='leader mx-3 sm:mx-16 mt-32 rounded-3xl p-3 sm:p-10'>
        <div className='mx-5 md:mx-44 '>
          <Heading1 title='Leader in AI visual inspection'/>
          <h1 className='mb-10 font-semibold text-[3rem] sm:text-[3.5rem] leading-tight'>Crafting Tomorrow's <br /> World with
        <span className='text-blue-600 font-normal leading-tight '> AI Excellence</span>
      </h1>
      <p className='mb-5 opacity-70 '>Leveraging AI, Ombrulla empowers clients with data-driven insights and automation, extracting valuable information from various sources like photos, videos, and data lakes. Our AI visual inspection system enables businesses to enhance their bottom line through precise defect detection and actionable insights.</p>
        <VideoButton title='Watch Corporate Video' colorHover='text-blue-600' bgHover='bg-white' border='border-black'/>
        </div>
      </section>

      {/* AI part */}
      <section className='mt-32 mx-5 sm:mx-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          <div>
            <Heading1 title='AI VISUAL INSPECTION' heading='Enhancing quality through AI-based visual inspection'/>
            <p className='mt-3 opacity-70 '>Ombrulla transforms quality control across manufacturing and various sectors through its AI-driven defect detection system, replacing traditional visual inspection. This AI visual inspection not only eradicates human errors and delays but also elevates precision, culminating in a streamlined and accurate quality control process.</p>
            <ul className='mt-3 mb-5 list-disc opacity-70  mx-5 sm:mx-10'>
              <li>AI visual inspection ensures consistent performance with unmatched accuracy</li>
              <li>It boosts throughput and cuts down on labour expenses</li>
              <li>By minimizing recalls and rework, AI inspection enhances brand reputation</li>
              <li>Real-time data and analytics enable scalability in AI-based visual inspection</li>
            </ul>
            <div className='mt-3 flex gap-5 sm:gap-10 place-items-center'>
              <Button bg='bg-blue-600' border='border-black'/>
              <ArrowButton title='Read more'/>
            </div>
          </div>
          <div className='hidden md:block'>
            <img src={aivisualinspection} alt="AI viusal inspection" className='rounded-3xl mt-10 m-auto h-[75%]'/>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-10'>
          <div className='hidden md:block '>
            <img src={aivisualinfrastructure} alt="AI viusal inspection" className='rounded-3xl mt-10 m-auto h-[75%]'/>
          </div>
          <div className='mt-20 md:mt-0'>
            <Heading1 title='AI INFRASTRUCTURE INSPECTION' heading='Enhances Efficiency, Safety, and Cost-Effectiveness'/>
            <p className='mt-3 opacity-70 '>Ombrulla's AI Infrastructure Inspection utilizes AI drone inspections for real-time insights, transforming the way we inspect critical infrastructure. This AI inspection technology enhances efficiency, safety, and cost-effectiveness, all while ensuring longevity and reducing risks. By leveraging AI in Infrastructure, Ombrulla empowers better infrastructure management with increased reliability and responsiveness.</p>
            <ul className='mt-3 mb-5 list-disc opacity-70  mx-5 sm:mx-10'>
              <li>Precision: AI infrastructure solutions ensure accurate defect detection, minimizing oversight</li>
              <li>Efficiency: Automating inspections with AI drone technology saves time and resources</li>
              <li>Predictive Maintenance: AI-driven analysis predicts maintenance needs, preventing costly breakdowns.</li>
              <li>Safety: AI inspections in infrastructure reduce manual work in hazardous areas, enhancing worker safety</li>
            </ul>
            <div className='mt-3 flex gap-5 sm:gap-10 place-items-center'>
              <Button bg='bg-blue-600' border='border-black'/>
              <ArrowButton title='Read more'/>
            </div>
          </div>
        </div>
      </section>

      {/* petran part */}
      <section className='mt-32 mb-10'>
        <div className='petran p-5 sm:p-24 grid grid-cols-1 md:grid-cols-2 '>
          <div>
            <img src={petrantext} alt="petran" className='h-6 ' />
            <p className='text-white'><span className='font-bold'>PE</span>rformance - <span className='font-bold'>TR</span>acking - <span className='font-bold'>AN</span>alytics</p>
            <h1 className='mt-5 font-medium text-[2.5rem] text-white leading-tight'>AIoT Enabled Asset <br /> Performance Management Software</h1>
            <p className='mt-10 text-white leading-tight'>PETRAN offers an Asset Management software (APM) that harnesses the power of artificial intelligence and the Internet of Things (IoT) to empower data-driven decision-making and enable predictive maintenance and operational equipment effectiveness</p>
            <div className='mt-10 flex gap-5 sm:gap-10 place-items-center'>
              <Button />
              <VideoButton title='Watch Video' color='text-white'/>
            </div>
          </div>
          <div className='m-10'>
            <img src={petran} alt="petran" className='transform skew-y-6'/>
          </div>
        </div>
      </section>

      {/* products part */}
      <section className='mt-32 mx-10 sm:mx-20'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
          <div>
            <Heading1 title='PRODUCTS' heading='Tracking Tools' />
            <p className='mt-10 opacity-70 leading-6'>AI and IoT-enabled tracking tools enhance workplace safety by providing real-time monitoring of workers' movements and vital signs. Simultaneously, they contribute to environmental sustainability by optimizing energy usage, improving waste management, and promoting resource efficiency.</p>
          </div>
            <ProductCard heading='RTLS - Workplace Safety' img={cardimage1} mt='mt-14' text='IoT and AI integration improves workplace safety by continuously monitoring vital signs and locations in real-time for proactive hazard detection.'/>
            <ProductCard heading='Environmental Sustainability' img={cardimage2} mt='mt-6' text='AI and IoT enhance environmental sustainability by optimizing energy use, improving waste management, and promoting resource efficiency.'/>
        </div>
      </section>

      {/* customers part */}
      <section className='mt-40 mx-5 sm:mx-20'>
        <div>
          <Heading1 title='OUR CUSTOMERS' heading='They Trust Us' double='true'/>
          <Carousal />
        </div>
      </section>

      {/* testimonials part */}
      <section className='mt-20 sm:mt-32 bg-[#172554]'>
        <div className='p-5 sm:p-20'>
          <Heading1 title='OUR TESTIMONIALS' heading='What Customers Say About Us' headingColor='text-white' titleColor='text-white'/>
          <div className='mt-10'>
            <CustomersCarousel />
          </div>
        </div>
      </section>

      {/* brands part */}
      <section className='mt-32 mx-5 sm:mx-20'>
        <div>
          <Heading1 title='BRANDS WE WORK WITH' heading='Trusted by Thousands of Businesses' double='true'/>
          <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 border rounded-3xl mt-20 bg-gray-50 mb-20'>
            <div className='sm:p-10 sm:px-20 p-3 px-5 w-full m-auto hover:bg-white hover:shadow hover:rounded-tl-3xl'><img src={unv} alt="unv" className='h-20 w-20 sm:h-32 sm:w-32 m-auto'/></div>
            <div className='sm:p-10 sm:px-20 p-3 px-5 w-full m-auto hover:bg-white hover:shadow'><img src={alhua} alt="unv" className='h-20 w-20 sm:h-32 sm:w-32 m-auto'/></div>
            <div className='sm:p-10 sm:px-20 p-3 px-5 w-full m-auto hover:bg-white hover:shadow hover:rounded-tr-3xl'><img src={nvidia} alt="unv" className='h-20 w-20 sm:h-32 sm:w-32 m-auto'/></div>
            <div className='sm:p-10 sm:px-20 p-3 px-5 w-full m-auto hover:bg-white hover:shadow hover:rounded-bl-3xl'><img src={amazon} alt="unv" className='h-20 w-20 sm:h-32 sm:w-32 m-auto'/></div>
            <div className='sm:p-10 sm:px-20 p-3 px-5 w-full m-auto hover:bg-white hover:shadow'><img src={hikvision} alt="unv" className='h-20 w-20 sm:h-32 sm:w-32 m-auto'/></div>
            <div className='sm:p-10 sm:px-20 p-3 px-5 w-full m-auto hover:bg-white hover:shadow hover:rounded-br-3xl'><img src={azure} alt="unv" className='h-20 w-20 sm:h-32 sm:w-32 m-auto'/></div>
          </div>
        </div>
      </section>

      {/* insights part */}
      <section className='mt-32'>
        <Heading1 title='AI INSIGHTS' heading='To Read' double='true' />
        <hr className='mt-10 mb-10 w-[95%] m-auto border'/>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 mx-10 sm:mx-20'>
        <InsightCard img={insightcard1} heading='Transforming Maritime Inspections with AI Visual Inspection' 
          text='Explore how pioneering AI-driven inspections in the maritime industry are revolutionizing asset monitoring with improved ...' 
          name='Zara Elizabeth' time='April 29, 2024 · 6 min read'  mt='mt-5'
        />
        <InsightCard img={insightcard2} heading="AI Visual Inspection &#038; its Use Cases" 
          text='AI-based visual inspection utilizes artificial intelligence algorithms to analyze visual data, enabling automated detect ...' 
          name='Zara Elizabeth' time='April 5, 2024 · 7 min read' mt='mt-20'
        />
        <InsightCard img={insightcard3} heading='How to include AI Visual Inspection into your quality control process' 
          text='AI visual inspection in manufacturing surges efficiency and accuracy, detecting defects to optimize resources and contin ...' 
          name='Zara Elizabeth' time='March 27, 2024 · 10 min read' mt='mt-5'
        />
        </div>
      </section>

      {/* footer */}
      <Footer />

    </div>
  )
}

export default Home
