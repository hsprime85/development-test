import React from 'react'

function Dots({currentIdx, onclick, sliderImages}) {
    return (
        <div className="dots-container">
            {sliderImages.map((slide, idx) => (
                <span key={idx} className={`${currentIdx === idx ? "dot current-dot" : "dot"}`} onClick={() => onclick(idx)}></span>
            ))}
        </div>
    )
}

export default Dots
 