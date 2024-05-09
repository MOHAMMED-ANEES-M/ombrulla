import React from 'react'
import img1 from '../assets/carousal-azelit.webp'
import img2 from '../assets/carousal-best-western.webp'
import img3 from '../assets/carousal-burger-king.webp'
import img4 from '../assets/carousal-damac.webp'
import img5 from '../assets/carousal-dubai-festival-city.webp'
import img6 from '../assets/carousal-planet-fitness.webp'
import img7 from '../assets/carousal-suja.webp'
import img8 from '../assets/carousal-wildleaf.webp'

const Carousal = () => {

    const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  return (
    <div class="mt-20 w-full inline-flex flex-nowrap overflow-hidden">
        <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            {images.map((img, index) => (
                <li key={index} className="inline-block">
                <img src={img} alt={`Brand ${index + 1}`} className="h-10 w-10 sm:h-40 sm:w-40" />
                </li>
            ))}
        </ul>
        <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
            {images.map((img, index) => (
                <li key={index} className="inline-block">
                <img src={img} alt={`Brand ${index + 1}`} className="h-10 w-10 sm:h-40 sm:w-40" />
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Carousal
