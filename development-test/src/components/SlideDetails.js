import React from 'react'

const SlideDetails = ({currentIdx, sliderImages}) => {
    return (
        <div>
            { sliderImages.map((slide, idx) => (
                <div key={idx} className={idx === currentIdx ? "slide active" : "inactive"}>
                    <h1>{slide.title}</h1>
                    <h3>{slide.decription}</h3>
                    <img className="slide-image" src={slide.image} alt={slide.alt} />
                </div>
            ))}
        </div>
    )
}

export default SlideDetails
