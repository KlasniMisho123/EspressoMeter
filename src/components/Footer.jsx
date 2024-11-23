import React from 'react'
import espressoMLogo from '../../public/espresso-logo.png'

export default function Footer() {
  return (
    <footer>
        <div className='company-info'> 
            <div className='company-header'>
                <img className='company-logo' src={espressoMLogo} />
                <p className='text-gradient'>ESPRESSO<span style={{ fontSize: "24px" }}>𝔪</span>ETER</p> 
            </div>
            <div className='company-body'>
                <p>A web app that allows you to track your coffee stats, including total money spent, current caffeine level, most consumed coffee type, and more.</p>
            </div>
        </div>
       <div>2</div>
    </footer>
  )
}

//  <p><span className="text-gradient"> Espresso𝔪eter </span> was inspired by - <a target="_blank" href="https://www.smoljames.com">Smoljames </a> 
// using the - <a  target="_blank" href="https://www.fantacss.smoljames.com">FantaCSS</a> design library. <br/>Check out the project on <a target="_blank" href="https://github.com/KlasniMisho123/EspressoMeter">GitHub</a> <i className="fa-brands fa-github"></i></p>