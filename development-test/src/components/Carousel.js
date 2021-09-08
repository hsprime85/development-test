import React, { useState, useEffect } from 'react';
import SlideDetails from './SlideDetails';
import Dots from './Dots';
import Arrows from './Arrows';
import sliderImages from '../images/SliderData'
import './carouselStyle.css'

const len = sliderImages.length -1;

const Carousel = () => {

    const [currentIdx, setCurrentIdx] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIdx(currentIdx === len ? 0 : currentIdx + 1);
        }, 4000);
        return () => clearInterval(interval);
    })
    return (

        <div className="carousel-container">
          <SlideDetails currentIdx={currentIdx} sliderImages={sliderImages} />
          <Arrows
            prevSlide={() =>
              setCurrentIdx(currentIdx < 1 ? len : currentIdx - 1)
            }
            nextSlide={() =>
              setCurrentIdx(currentIdx === len ? 0 : currentIdx + 1)
            }
          />
          <Dots
            currentIdx={currentIdx}
            sliderImages={sliderImages}
            onclick={(currentIdx) => setCurrentIdx(currentIdx)}
          />
      </div>
    )
}

export default Carousel
