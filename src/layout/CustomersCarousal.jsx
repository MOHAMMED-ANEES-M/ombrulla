import React, { useState } from 'react';
import { GrPrevious, GrNext } from "react-icons/gr";
import CustomersCard from './CustomersCard';
import joseph from '../assets/testimonials-joseph.webp'
import david from '../assets/testimonials-david.webp'
import james from '../assets/testimonials-james.webp'
import manoj from '../assets/testimonials-manoj.webp'
import quresh from '../assets/testimonials-quresh.webp'
import tony from '../assets/testimonials-tony.webp'
import vinod from '../assets/testimonials-vinod.webp'

const CustomersCarousel = () => {
 

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <ul className="flex gap-5 overflow-x-scroll [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ">
              <CustomersCard name="Joseph" desc="Terranz Dubai, UAE" img={joseph} text="Ombrulla's AI-based Employee and Visitor Tracking System has significantly enhanced our workplace operations, seamlessly integrating security and productivity. This implementation has made our organization more efficient and effective." />
              <CustomersCard name="Joseph" desc="Terranz Dubai, UAE" img={vinod} text="Ombrulla's AI-based Employee and Visitor Tracking System has significantly enhanced our workplace operations, seamlessly integrating security and productivity. This implementation has made our organization more efficient and effective." />
              <CustomersCard name="Joseph" desc="Terranz Dubai, UAE" img={manoj} text="Ombrulla's AI-based Employee and Visitor Tracking System has significantly enhanced our workplace operations, seamlessly integrating security and productivity. This implementation has made our organization more efficient and effective." />
              <CustomersCard name="Joseph" desc="Terranz Dubai, UAE" img={manoj} text="Ombrulla's AI-based Employee and Visitor Tracking System has significantly enhanced our workplace operations, seamlessly integrating security and productivity. This implementation has made our organization more efficient and effective." />
              <CustomersCard name="Joseph" desc="Terranz Dubai, UAE" img={manoj} text="Ombrulla's AI-based Employee and Visitor Tracking System has significantly enhanced our workplace operations, seamlessly integrating security and productivity. This implementation has made our organization more efficient and effective." />
              <CustomersCard name="Joseph" desc="Terranz Dubai, UAE" img={manoj} text="Ombrulla's AI-based Employee and Visitor Tracking System has significantly enhanced our workplace operations, seamlessly integrating security and productivity. This implementation has made our organization more efficient and effective." />
        </ul>
      </div>

      <div class="flex justify-center gap-2 mt-16 mb-5">
        <div class="rounded-full bg-white opacity-25 w-3 h-3 "></div>
        <div class="rounded-full bg-white opacity-25 w-3 h-3"></div>
        <div class="rounded-full bg-white opacity-25 w-3 h-3"></div>
        <div class="rounded-full bg-white opacity-25 w-3 h-3"></div>
        <div class="rounded-full bg-white opacity-25 w-3 h-3"></div>
        <div class="rounded-full bg-white opacity-25 w-3 h-3"></div>
      </div>     
    </div>
  );
};

export default CustomersCarousel;
