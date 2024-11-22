import { coffeeOptions } from '../utils'
import React, { useState } from 'react'
import Authentication from './Authentication'
import Modal from './Modal'
import { useAuth } from '../context/AuthContext'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../../firebase'


export default function CoffeeForm(props) {
    const { isAutenticated } = props

    const  [showModal, setShowModal ] = useState(false)
    const [selectedCoffee, setSelectedCoffee ] = useState(null)
    const [showCoffeeTypes, setShowCoffeeTypes] = useState(false)
    const [coffeeCost, setCoffeeCost ] = useState(0)
    const [hour, setHour ] = useState(0)
    const [min, setMin ] = useState(0)

    const { globalData, setGlobalData, globalUser } = useAuth()

     async function handleSubmit() {
        if(!isAutenticated) {
            setShowModal(true)
            return
        }

        // define a guard clause that only submits the form if it is completed
        if (!selectedCoffee) {return}

        // then we're going to create new data object
        const newGlobalData = { 
            ...(globalData || {})
        }
        
        const nowTime = Date.now()
        const timeToSubtract = (hour * 60 * 60 * 1000 ) + (min * 60 * 1000)
        const timestamp = nowTime - timeToSubtract

        const newData = {
            name: selectedCoffee,
            cost: coffeeCost
        }
        newGlobalData[timestamp] = newData
        // update globlas state

        setGlobalData(newGlobalData)
        // persist the data in the firebase firestore

        const userRef = doc(db, "users", globalUser.uid)
        const res = await setDoc(userRef, {
            [timestamp] : newData
        }, {merge: true})
    }

    function handleCloseModal() {
        setShowModal(false)
    }
    

    return (
      <>
      {showModal && (
        <Modal  handleCloseModal={handleCloseModal}> 
            <Authentication handleCloseModal={handleCloseModal} />
        </Modal>
    )}
      <div className='section-header'>
        <i className='fa-solid fa-pencil'></i>
          <h2>Start Tracking Today</h2>
      </div>
      <h4>Select coffee type</h4>
      <div className='coffee-grid'>
          { coffeeOptions.slice(0, 5).map((option, optionIndex) => {
            return (
            <button onClick={()=>{
                setSelectedCoffee(option.name)
                setShowCoffeeTypes(false)
            }} className={'button-card'  + (option.name === selectedCoffee ? " coffee-button-selected " : " ")} key={option.name}>
              <h4>{option.name}</h4>
              <p>{option.caffeine} mg</p>
            </button>
            )
          })}
          <button onClick={()=>{
            setSelectedCoffee(null)
            setShowCoffeeTypes(true)
          }} className={'button-card'  + ( showCoffeeTypes ? " coffee-button-selected " : " ")}>
              <h4> Other </h4>
              <p>n/a</p>
          </button>
      </div>
        { showCoffeeTypes && (
            <select onChange={(e) => {
                setSelectedCoffee(e.target.value)
            }} id="coffee-list" name="coffee-lis">
            <option value={null}> Select Type </option>
            {coffeeOptions.map((option, optionIndex) => {
            return (
                <option value={option.name} key={optionIndex}>
                    {option.name} ({option?.caffeine}mg)
                </option>
            )
            })}
            </select>
        )}
        <h4> Add the cost ($) </h4>
        <input className='w-full' type='number' value={coffeeCost} onChange={(e) => {
            setCoffeeCost(e.target.value)
        }}
        placeholder='4.50'/>
        <h4> Time of consumption </h4>
        <div className='time-entry'>
            <div>
                <h6>Hours</h6>
                <select id='hours-select' onChange={(e) =>{
                    setHour(e.target.value)
                }} >
                    {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23].map((hour, hourIndex) => {
                        return (
                            <option key={hourIndex} value={hour}>
                                {hour}
                            </option>
                        )
                    })}
                </select>
            </div>
            <div>
                <h6>Minutes</h6>
                <select id='mins-select' onChange={(e) =>{
                    setMin(e.target.value)
                }} >
                    {[0, 5, 10, 15, 30, 45].map((mins, minsIndex) => {
                        return (
                            <option key={minsIndex} value={mins}>
                                {mins}
                            </option>
                        )
                    })}
                </select>
            </div>
            <button onClick={handleSubmit}>
                <p>Add Entry</p>
            </button>
        </div>
      </>  
    )
  }
  


