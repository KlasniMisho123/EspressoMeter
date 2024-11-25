'use client'
import React, {useState} from 'react'
import { useAuth } from '../context/AuthContext'

export default function Authentication(props) {

  const [isRegistration, setIsRegistration] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isAuthenticating, setIsAuthenticating] = useState(false)
  const [error, setError] = useState(null)

  const { handleCloseModal } = props
  const {signup, login } = useAuth()

  async function handleAuthenticate() {
    if (isAuthenticating) { return }
    if (!email || !email.includes('@')) {
      setError("Please enter a valid email address.")
      return
    }
    if (!password || password.length < 6) {
       setError("Password must be at least 6 characters long.")
      return
    }

    try {
        setIsAuthenticating(true)
        setError(null)

        if (isRegistration) {
            // register a user
            await signup(email, password)
        } else {
            // login a user
            await login(email, password)
        }
        handleCloseModal()
    } catch (err) {
        console.log(err.message)
        setError("Email or password is incorrect. Please try again.")
    } finally {
        setIsAuthenticating(false)
    }

}

  return (
    <>
    <h2 className='sign-up-text'>{isRegistration ? "Sign up" : "Login"}</h2>
    <p>{isRegistration ? "Create an account" : "Sign in to your accaunt"} </p>
    {error && (
      <p> <i className="fa-solid fa-xmark" style={{ color: 'red', fontSize: '16px', marginRight: '5px' }}></i>{error} </p>
    )}
    <input value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email'/>
    <input value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='********' type='password' />
    <button onClick={handleAuthenticate}><p>{isAuthenticating ? 'Authenticating...' : 'Submit'}</p></button>
    <hr/>
    <div className='regster-content'>
      <p>{isRegistration ? "Already have account?" : "Don't have an account?"}</p>
      <button onClick={()=> {setIsRegistration(!isRegistration) }}>
        <p>
        {isRegistration ? "Sign in " : "Sign Up"}
        </p>
        </button>
    </div>
    </>
  )
}
