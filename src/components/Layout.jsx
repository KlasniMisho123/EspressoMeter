import { useState } from 'react'
import Authentication from "./Authentication"
import Modal from "./Modal"
import { useAuth } from '../context/AuthContext'

export default function Layout(props) {
    const { children } = props

    const [showModal, setShowModal] = useState(false)
    
    const { globalUser, logout } = useAuth()

    const header = (
        <header>
            <div>
                <h1 className="text-gradient">ESPRESSO<span className="m-meter">𝔪</span>ETER</h1>
                <p> For Coffee Insatiates</p>
            </div>
            { globalUser ? (
            <button onClick={() => { logout() }}>        
                <p>Log Out</p>
                <i className="fa-solid fa-right-from-bracket"></i>
            </button>) : (  
            <button onClick={() => {setShowModal(true)}}> 
                <p>Sign up free</p>
                <i className="fa-solid fa-mug-hot"></i>
            </button> )}
        </header>
    )

    const footer = (
        <footer>
            <p><span className="text-gradient"> Espresso𝔪eter </span> was inspired by - <a target="_blank" href="https://www.smoljames.com">Smoljames</a> 
            using the - <a  target="_blank" href="https://www.fantacss.smoljames.com">FantaCSS</a> design library. <br/>Check out the project on <a target="_blank" href="https://github.com/KlasniMisho123/EspressoMeter">GitHub</a> <i className="fa-brands fa-github"></i></p>
        </footer>
    )

function handleCloseModal() {
    setShowModal(false)
}



 return(
    <>
    {showModal && (
        <Modal  handleCloseModal={handleCloseModal}> 
            <Authentication handleCloseModal={handleCloseModal} />
        </Modal>
    )}
    {header}
    <main>
        {children}
    </main>
    {footer}
    </>
 )
}