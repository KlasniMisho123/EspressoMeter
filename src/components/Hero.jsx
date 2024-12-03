import React, { useState, useEffect } from 'react';
import WebStats from './WebStats'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase'

export default function Hero() {
  const [totalUsers, setTotalUsers ] = useState(0)
  const [totalCommits, setTotalCommits ] = useState(0)
  const [avgRateing, setAvgRateing ] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  function timeSince() {
    const startDate = new Date("12/2/2024").getTime()
    const currentDate = new Date("12/3/2024").getTime()
    
    let utcSince = currentDate - startDate
    console.log("daysSince: ", utcSince)

    let utcInDays = Math.round( utcSince / (1000 * 3600 * 24))
    console.log("utcInDays: ", utcInDays)
  }

  

  async function countUsers() {
    setIsLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      const userCount = querySnapshot.size;
      // totalUsers - 0, missing Error:  Missing or insufficient permissions
      setTotalUsers(userCount)
    } catch (err) {
      // console.log("Error: ", err.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    countUsers();
    timeSince();
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
            <WebStats icon={<i className="fa-solid fa-users"></i>} stat={`${170} +`} title={'Total Users'} classNumber={"one"}/>
            <WebStats icon={<i className="fa-solid fa-code-commit"></i>} stat={`${5778} +`} title={'Commits'} classNumber={"two"}/>
            <WebStats icon={<i className="fa-regular fa-calendar-days"></i>} stat={`${20} +`} title={'With You'} classNumber={"three"}/>
            <WebStats icon={<i className="fa-solid fa-users"></i>} stat={4.7} statDecoration={avgRateDec} title={'Avg Rating'} classNumber={"four"}/>
          </div>)}
        </div>
        
       
    </>
  )
}
