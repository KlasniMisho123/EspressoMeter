import React from 'react'
import { coffeeOptions } from '../utils'

export default function CoffeeForm() {
  return (
    <>
    <div className='section-header'>
      <i className='fa-solid fa-pencil'></i>
        <h2>Start Tracking Today</h2>
    </div>
    <h4>Select coffee type</h4>
    <div className='coffee-grid'>
        { coffeeOptions.slice(0, 5).map((option, optionIndex) => {
          return(
          <button className='button-card' key={{optionIndex}}>
            <h4>{option.name}</h4>
            <p>{option.caffeine} mg</p>
          </button>
          )
        })}
        <button className="button-card">
            <h4> Other </h4>
            <p>n/a</p>
        </button>
    </div>
    </>  
  )
}
