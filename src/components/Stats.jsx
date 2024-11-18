import React from 'react'

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
  return (
    <>
      <div className='selection-header'>
        <i className='fa-solid fa-chart-simple'/>
        <h2>Stats</h2>
      </div>
      <div className='stats-grid'>
          <StatCard lg title="Active Caffeine Level"></StatCard>
          <StatCard title="Daily Caffeine"></StatCard>
          <StatCard title="Avg # of Coffees"></StatCard>
          <StatCard title="Daily Cost ($) "></StatCard>
          <StatCard title="Total Cost ($) "></StatCard>
      </div>
    </>
  )
}
