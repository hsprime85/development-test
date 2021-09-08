import React from 'react'

const Arrows = ({prevSlide, nextSlide}) => {
    return (
        <div className="arrows">
            <span className="prev" onClick={prevSlide}><i className="fas fa-arrow-circle-left"></i></span>            
            <span className="next" onClick={nextSlide}><i className="fas fa-arrow-circle-right"></i></span>            
        </div>
    )
}

export default Arrows
