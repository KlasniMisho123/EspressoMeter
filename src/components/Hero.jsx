import React from 'react'

export default function Hero() {
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
            <h5>That caffeine's galf-life is about 5 hours?</h5>
            <p>This means that after 5 hours, half caffeine you \
              consumed is still in your system, keeping you alert longer! so 
              if you drink a cup of coffee with 200 mg if caffeine,
              5 hours, later, you'll still have about
               100 mg of caffeine in your system </p>
          </div>
       </div>
    </>
  )
}
