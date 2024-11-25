import React, { useState } from 'react'
import { calculateCurrentCaffeineLevel, coffeeConsumptionHistory, getCaffeineAmount, timeSinceConsumption } from '../utils'
import { useAuth } from '../context/AuthContext'

export default function History() {

  const { globalData } = useAuth()
  const [currentCoffeeStat, setCurrentCoffeeStat ] = useState("")
  const [currentCoffeeIndex, setCurrentCoffeeIndex ] = useState(0)

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
                  setCurrentCoffeeStat(summary)
                  setCurrentCoffeeIndex(coffeeIndex)
                  if(currentCoffeeIndex == coffeeIndex) {
                    setCurrentCoffeeIndex(0)
                    setCurrentCoffeeStat("")
                  }
                  }}>
                  <i className='fa-solid fa-mug-hot' />
                </button>
            )
        })}
      </div>
      {currentCoffeeStat}
    </>
  )
}
