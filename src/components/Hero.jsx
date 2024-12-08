import React, { useState, useEffect } from 'react';
import WebStats from './WebStats'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase'

export default function Hero() {
  const [totalUsers, setTotalUsers ] = useState(0)
  const [totalCommits, setTotalCommits ] = useState(0)
  const [avgRateing, setAvgRateing ] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  let fromStart = timeSince()

  function timeSince() {
    const startDate = new Date("11/28/2024").getTime()
    const currentDate = new Date().getTime()
    
    let utcSince = currentDate - startDate

    // 1000 Milliseconds --> Sec, 60 Sec --> Min, 60 Min --> Hour, 24 Hour --> Day 

    let utcInDays = Math.round( utcSince / (1000 * 3600 * 24))
    if(utcInDays / 365 >= 1) {
      const years = Math.floor(utcInDays / 365)
      return (`${(years)} + Years`)
      } else {
        return (utcInDays + " Days")
      }
  }

  

  async function countWebStats() {
    setIsLoading(true);
    try {
      
      const querySnapshot = await getDocs(collection(db, "users"));
      // **count totalUsers, setTotalUsers
      const userCount = querySnapshot.size;
      setTotalUsers(userCount)
      
      // **count totalCommits, setTotalCommits
      let totalCommits = 0;

      querySnapshot.docs.forEach((userDoc) => { 
        // construct data
        const userData = userDoc.data();
        // calculate commits for each user.
        const commitCount = Object.keys(userData).length;
        totalCommits += commitCount
        setTotalCommits(totalCommits)
      })
      // console.log err doesnot works without console.log??
      // console.log("userCommitCount: ", userCommitCount) 
      userCommitCount 

      setTotalCommits(0)
    } catch (err) {
      // console.log("Couldnt get TotalUsers Error: ", err.message);
    } finally {
      setIsLoading(false);
    }
  }

  let numberOfRates = 0
  let sumOfRates = 0
  async function avrgRate() {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      
      
      querySnapshot.docs.forEach(async (user, indexUser)=>{
        const userId = user.id
        
        const queryUserRating = await getDocs(collection(db, "users", userId, "userRating"));

        let userRatingData = queryUserRating.docs

        if(userRatingData.length != 0) {
          numberOfRates += 1
          userRatingData.forEach(userWRate => {
            sumOfRates += userWRate.data().rate
            sumOfRates
          });
        } else {
          return
        }
        const rateAverage = parseFloat(sumOfRates / numberOfRates).toFixed(1)
        setAvgRateing(rateAverage)
      })
    } catch(err) {
      console.log("Average Rateing Error: ", err.message)
    } finally {
      
    }   
  }
  
  avrgRate();

  useEffect(() => {
    countWebStats();
  }, []); 

  

  const avgRateDec = (<span><i className="fa-solid fa-star" style={{color:"yellow", fontSize: "18px"}}></i></span>)

  return (
    <>
        <h1> Coffee Tracking for Cofee <abbr title="An Enthusiast or devotee">Fiends</abbr></h1>
        <div className='benefits-list'>
            <h3 className='font-bolder '>Try <span className='text-gradient'>Espresso𝔪eter</span> and start ...</h3>
            <p>✅ Tracking every cofeee </p>
            <p>✅ Measuring your blood caffeine levels </p>
            <p>✅ Costing and quantifying your addiction </p>
       </div>
       <div className='card info-card'>
          <div>
            <i className="fa-solid fa-circle-info"></i>
            <h3> Did You Know... </h3>
          </div>
          <h5>That caffeine's galf-life is about 5 hours?</h5>
          <p>This means that after 5 hours, half caffeine you \
              consumed is still in your system, keeping you alert longer! so 
              if you drink a cup of coffee with 200 mg if caffeine,
              5 hours, later, you'll still have about
               100 mg of caffeine in your system </p>
       </div>
       
        <div className='web-stats-layout'>
          {isLoading? (<div className='loading-div'><i className="fa-solid fa-gear loading-icon" style={{fontSize: "40px"}}></i> Loading</div>):
          (<div className='web-stats-grid'>
            <WebStats icon={<i className="fa-solid fa-users"></i>} stat={`${totalUsers}`} title={'Total Users'} classNumber={"one"}/>
            <WebStats icon={<i className="fa-solid fa-code-commit"></i>} stat={`${totalCommits}`} title={'Commits'} classNumber={"two"}/>
            <WebStats icon={<i className="fa-regular fa-calendar-days"></i>} stat={`${fromStart} `} title={'With You'} classNumber={"three"}/>
            <WebStats icon={<i className="fa-solid fa-users"></i>} stat={avgRateing} statDecoration={avgRateDec} title={'Average Rating'} classNumber={"four"}/>
          </div>)}
        </div>
        
       
    </>
  )
}
