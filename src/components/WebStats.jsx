import React from 'react'
import { db } from '../../firebase'

export default function WebStats(props) {
    const {} = props
  return (
    <div className='web-stats-layout'>
        <div className='web-stats-grid'>
            <div className='web-stats-div one'>
                <i className="fa-solid fa-users"></i>
                <div> 170 + </div>
                <h5> Total Users </h5>
            </div>
            <div className='web-stats-div two'>
                <i className="fa-solid fa-code-commit"></i>
                <div> 5778 + </div>
                <h5> Commits </h5>
            </div>

            <div className='web-stats-div three'>
                <i className="fa-regular fa-calendar-days"></i>
                <div> 20 + </div>
                <h5> With You </h5>
                </div>
            <div className='web-stats-div four'>
                <i className="fa-solid fa-users"></i>
                <div> 4.7 <span><i className="fa-solid fa-star" style={{color:"yellow", fontSize: "18px"}}></i></span> </div>
                <h5> Avg Rate </h5>
            </div>
        </div>
    </div>
  )
}
