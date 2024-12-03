import React, { useState } from 'react'

export default function RateWeb() {
    const [hoveredStar, setHoveredStar] = useState(null);

    const handleMouseEnter = (starIndex) => {
        setHoveredStar(starIndex);
    }

    const handleMouseLeave = () => {
        setHoveredStar(null);
    }

  return (
    <div className='rateing-input'>
          {[1, 2, 3, 4, 5].map((starIndex) => (
            <button 
            className={`rate-btn rate-star-${starIndex}`}
            key={starIndex}
            onMouseEnter={() => handleMouseEnter(starIndex)}
            onMouseLeave={handleMouseLeave}
            >
                <i className={"fa-solid fa-star " + (starIndex <= hoveredStar ? "hovered-rate-star" : "default-rate-star")}></i>
            </button>
          ))}
    </div>
  )
}

{/* <button className='rate-btn'>
             <i className="fa-solid fa-star"></i> 
        </button> 
        <button className='rate-btn'>
             <i className="fa-solid fa-star"></i> 
        </button> 
        <button className='rate-btn'>
             <i className="fa-solid fa-star"></i> 
        </button> 
        <button className='rate-btn'>
             <i className="fa-solid fa-star"></i> 
        </button> 
        <button className='rate-btn'>
             <i className="fa-solid fa-star"></i> 
        </button> */}