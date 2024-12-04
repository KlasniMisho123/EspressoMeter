import { startAfter } from 'firebase/firestore';
import React, { useState } from 'react'

export default function RateWeb() {
    const [hoveredStar, setHoveredStar] = useState(null);
    const [rate, setRate] = useState(0)
    const [rateAnimation, setRateAnimation] = useState(0)
    const [rateSuccess, setRateSuccess ] = useState("")

     //rate can be used instead of rateanimation after set in firestore

    const handleMouseEnter = (starIndex) => {
        setHoveredStar(starIndex);
    }

    const handleMouseLeave = () => {
        setHoveredStar(null);
    }

    const handleRate = ()  => {
          setRateSuccess("Your rate has been received")
          setTimeout(() => {
               setRateSuccess("");
               setRateAnimation(0)
           }, 5000);
    }


  return (
    <div className='rateing-input'>
          {[1, 2, 3, 4, 5].map((starIndex) => (
            <button 
            className={`rate-btn rate-star-${starIndex}`}
            key={starIndex}
            onClick={()=> {
               handleRate()
               setRateAnimation(starIndex)
               setRate(starIndex)
            }}
            onMouseEnter={() => handleMouseEnter(starIndex)}
            onMouseLeave={handleMouseLeave}
            >
                <i className={"fa-solid fa-star " + 
               (starIndex <= hoveredStar 
                    ? "hovered-rate-star " 
                    : "default-rate-star ") +
               (rateAnimation && starIndex <= rateAnimation 
                    ? "hovered-rate-star" 
                    : "default-rate-star")
               }></i>
            </button>
          ))}
          {rateSuccess ? (<div className='rate-message'> <i className="fa-solid fa-circle-check" style={{ color: "#228B22" }}></i> <span style={{ color: "#FFFFFF" }}> {rateSuccess}! </span></div>) : ""}
    </div>
  )
}