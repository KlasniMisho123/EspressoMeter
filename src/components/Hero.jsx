import React from 'react'
import WebStats from './WebStats'

export default function Hero() {

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
          <div className='web-stats-grid'>
            <WebStats icon={<i className="fa-solid fa-users"></i>} stat={`${170} +`} title={'Total Users'} classNumber={"one"}/>
            <WebStats icon={<i className="fa-solid fa-code-commit"></i>} stat={`${5778} +`} title={'Commits'} classNumber={"two"}/>
            <WebStats icon={<i className="fa-regular fa-calendar-days"></i>} stat={20} title={'With You'} classNumber={"three"}/>
            <WebStats icon={<i className="fa-solid fa-users"></i>} stat={4.7} statDecoration={avgRateDec} title={'Avg Rate'} classNumber={"four"}/>
          </div>
        </div>
        
       
    </>
  )
}
