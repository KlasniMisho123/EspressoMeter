import React from 'react'
import { calculateCurrentCaffeineLevel, coffeeConsumptionHistory, statusLevels } from '../utils'

function StatCard(props) {
  const {lg, title, children } = props

    return(
      <div className={'card start-card '  + (lg ? ' col-span-2' : "")}>
        <h4> {title} </h4>
        {children}
      </div>
    )
}

export default function Stats() {
  const stats = {
    daily_caffeine:240,
    daily_cost: 6.8,
    average_coffees: 2.3,
    total_cost: 220
  }

  const caffeineLevel = calculateCurrentCaffeineLevel(coffeeConsumptionHistory)

  return (
    <>
      <div className='selection-header'>
        <i className='fa-solid fa-chart-simple'/>
        <h2>Stats</h2>
      </div>
      <div className='stats-grid'>
          <StatCard lg title="Active Caffeine Level">
            <div className='status'>
              <p><span className='stat-text'>{caffeineLevel}</span>mg</p>
              <h5 style={{color: statusLevels["low"].color, background: statusLevels["low"].background}}>Low</h5>
              <p>{statusLevels['low'].description}</p>
            </div>
          </StatCard>
          <StatCard title="Daily Caffeine"></StatCard>
          <StatCard title="Avg # of Coffees"></StatCard>
          <StatCard title="Daily Cost ($) "></StatCard>
          <StatCard title="Total Cost ($) "></StatCard>
      </div>
    </>
  )
}
