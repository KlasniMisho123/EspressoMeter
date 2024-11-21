import React, {useState} from 'react'
import { useAuth } from '../context/AuthContext'

export default function Authentication() {

  const [isRegistration, setIsRegistration] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isAuthenticating, setIsAuthenticating] = useState(false)

  const {signup, login} = useAuth()

  async function handleAuthentication() {
    if (!email || email.includes('@') || !password || password.length < 6 ||
     isAuthenticating) { return }
      try {
        setIsAuthenticating(true)
        if (isRegistration) {
          // Register user
          await signup(email, password)
        } else {
          // Login a user
          await login(email, password)
        }
      } catch(err) {
        console.log(err.message)
      } finally {
        setIsAuthenticating(false)
      }
    
  }

  return (
    <>
    <h2 className='sign-up-text'>{isRegistration ? "Sign up" : "Login"}</h2>
    <p>{isRegistration ? "Create an account" : "Sign in to your accaunt"} </p>
    <input value={email} onchange={(e)=>{setEmail(e.target.value)}} placeholder='Email'/>
    <input value={password} onchange={(e)=>{setPassword(e.target.value)}} placeholder='********' type='password' />
    <button onClick={handleAuthentication}> <p> {isAuthenticating ? 'Authenticating...' : "Submit"} </p> </button>
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
