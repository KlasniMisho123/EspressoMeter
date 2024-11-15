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
        <select id="coffee-list" name="coffee-list">
            <option value={null}> Select Type </option>
            {coffeeOptions.map((option, optionIndex) => {
            return (
                <option value={option.name} key={optionIndex}>
                    {option.name} ({option?.caffeine}mg)
                </option>
            )
            })}
        </select>
        <h4> Add the cost ($) </h4>
        <input className='w-full' type='number' placeholder='4.50'/>
        <h4> Time of consumption </h4>
        <div className='time-entry'></div>
      </>  
    )
  }
  


