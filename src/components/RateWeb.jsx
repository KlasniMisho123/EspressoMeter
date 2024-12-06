import React, { useEffect, useState } from 'react'
import { doc, collection, setDoc, getDocs, addDoc } from 'firebase/firestore';
import { db } from "../../firebase";
import { useAuth } from '../context/AuthContext';

export default function RateWeb() {
  
  const [hoveredStar, setHoveredStar] = useState(null);
  const [rate, setRate] = useState(-1)
  const [tempoRate, setTempoRate] = useState(0)
  const [rateSuccess, setRateSuccess ] = useState("")

  const { globalUser } = useAuth()
  
    const handleMouseEnter = (starIndex) => {
        setHoveredStar(starIndex);
    }

    const handleMouseLeave = () => {
        setHoveredStar(null);
    }

    const handleRate = async()  => {
      try {
        const userRate =  rate 

        const userRef = doc(db, "users", globalUser.uid)
        
        const userRatingRef = doc(userRef, "userRating", "rateDoc");

        await setDoc(userRatingRef, { rate: userRate }, { merge: true });

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

    useEffect(() => {
      if (rate !== -1) {
        handleRate();
      }
    }, [rate]);

  return (
    <div className='rateing-input'>
          {[1, 2, 3, 4, 5].map((starIndex) => (
            <button 
            className={`rate-btn rate-star-${starIndex}`}
            key={starIndex}
            onClick={()=> {
              setRate(starIndex)
              setTempoRate(starIndex)
              // handleRate();
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
    </div>
  )
}