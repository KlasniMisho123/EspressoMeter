import { startAfter } from 'firebase/firestore';
import React, { useState } from 'react'

export default function RateWeb() {
    const [hoveredStar, setHoveredStar] = useState(null);
    const [rate, setRate] = useState(0)
    const [rateSuccess, setRateSuccess ] = useState("")

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
            onClick={()=> {
               setRate(starIndex)
               console.log("Rate: ", starIndex)
            }}
            onMouseEnter={() => handleMouseEnter(starIndex)}
            onMouseLeave={handleMouseLeave}
            >
                <i className={"fa-solid fa-star " + (starIndex <= hoveredStar ? "hovered-rate-star" : "default-rate-star")}></i>
            </button>
          ))}
    </div>
  )
}