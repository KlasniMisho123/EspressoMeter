import React from 'react'
import { db } from '../../firebase'

export default function WebStats(props) {
    const {icon, stat, title, classNumber} = props
  return (
    <>
        <div className={`web-stats-div one` + classNumber}>
            {icon}
            <div> {stat} + </div>
            <h5> {title} </h5>
        </div>
    </>
  )
}
