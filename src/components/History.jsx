import React, { useState } from 'react'
import { calculateCurrentCaffeineLevel, coffeeConsumptionHistory, getCaffeineAmount, timeSinceConsumption } from '../utils'
import { useAuth } from '../context/AuthContext'

export default function History() {

  const { globalData } = useAuth()
  const [currentCoffeeStat, setCurrentCoffeeStat ] = useState("")
  const [currentCoffeeIndex, setCurrentCoffeeIndex ] = useState(-1)

  return (
    <>
      <div className='section-header'>
        <i className='fa-solid fa-timeline'/>
        <h2>History</h2>
      </div>
      <p><i> Hover for more information! </i></p>
      <div className='coffee-history'>
        {Object.keys(globalData).sort((a,b) => b - a).map
        ((utcTime, coffeeIndex) => {
          const coffee = globalData[utcTime]
          const timeSinceConsume = timeSinceConsumption(utcTime)
          const originalAmount = getCaffeineAmount(coffee.name)
          const remainingAmount = calculateCurrentCaffeineLevel({
            [utcTime]: coffee
          })

          const summary = `${coffee.name} | ${timeSinceConsume} |
          ${coffee.cost}$ | ${remainingAmount}mg / ${originalAmount}mg`

            return (
                <button key={coffeeIndex} title={summary} onClick={()=> {
                  setCurrentCoffeeStat([coffee.name, timeSinceConsume, remainingAmount, originalAmount])
                  setCurrentCoffeeIndex(coffeeIndex)
                  if(currentCoffeeIndex == coffeeIndex) {
                    setCurrentCoffeeIndex(-1)
                    setCurrentCoffeeStat("")
                  }
                  }}>
                  <i className='fa-solid fa-mug-hot' />
                </button>
            )
        })}
      </div>
      {currentCoffeeStat?   <div className='selected-coffee-section'>
        <div>
          <img style={{height: '80px', objectFit: "cover"}} src='../../public/coffee-cup.png' />
        </div>
        <div className='coffee-stat-div'>
            <h3 style={{ textAlign: "center" }}>{currentCoffeeStat[0]}</h3>
            <p><span>Consumed:</span> {currentCoffeeStat[1]} Ago </p>
            <p><span>Current Caffeine:</span> {currentCoffeeStat[2]}mg /{currentCoffeeStat[3]}mg</p>
            <button onClick={()=>{
              console.log("currentCoffeeStat: ", currentCoffeeStat)
            }}><i className="fa-solid fa-trash"></i> Remove </button>
        </div>
      </div> : "" }
    </>
  )
}
