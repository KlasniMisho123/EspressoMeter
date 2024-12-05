import React from 'react'

export default function WebStats(props) {
    const {icon, stat, title, classNumber, statDecoration} = props
    
  return (
    <>
        <div className={`web-stats-div ` + classNumber}>
            {icon}
            <div> {stat} {statDecoration ? statDecoration : null}</div>
            <h5> {title} </h5>
        </div>
        
    </>
  )
}
