import React, { useState } from 'react'
import { collection, setDoc, getDocs } from 'firebase/firestore';
import { db } from "../../firebase";

export default function RateWeb() {
    const [hoveredStar, setHoveredStar] = useState(null);
    const [rate, setRate] = useState(0)
    const [tempoRate, setTempoRate] = useState(0)
    const [rateSuccess, setRateSuccess ] = useState("")
    // const [previousRate, setPreviousRate ] = useState(-1)
    
    const handleMouseEnter = (starIndex) => {
        setHoveredStar(starIndex);
    }

    const handleMouseLeave = () => {
        setHoveredStar(null);
    }

    const handleRate = ()  => {
      // if(previousRate == rate) { return }
      // else { }
      // setPreviousRate(rate)
      let userRateData = ""
      try {
        const userRate =  rate 
        userRateData = userRate
        setRateSuccess("Your rate has been received")     
      } catch(err) {
        console.log("Set Rate Err: ", err.message)
      } finally {
        setTimeout(() => {
          setRateSuccess("");
          setTempoRate(0)
        }, 5000);
        
      }
    }


  return (
    <div className='rateing-input'>
          {[1, 2, 3, 4, 5].map((starIndex) => (
            <button 
            className={`rate-btn rate-star-${starIndex}`}
            key={starIndex}
            onClick={()=> {
               handleRate()
               setRate(starIndex)
               setTempoRate(starIndex)
            }}
            onMouseEnter={() => handleMouseEnter(starIndex)}
            onMouseLeave={handleMouseLeave}
            >
                <i className={"fa-solid fa-star " + 
               (starIndex <= hoveredStar 
                    ? "hovered-rate-star " 
                    : "default-rate-star ") +
               (tempoRate && starIndex <= tempoRate 
                    ? "hovered-rate-star" 
                    : "default-rate-star")
               }></i>
            </button>
          ))}
          {rateSuccess ? (<div className='rate-message'> <i className="fa-solid fa-circle-check" style={{ color: "#228B22" }}></i> <span style={{ color: "#FFFFFF" }}> {rateSuccess}! </span></div>) : ""}
          {rate}
    </div>
  )
}