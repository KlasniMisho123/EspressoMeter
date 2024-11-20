import React, {useState} from 'react'

export default function Authentication() {

  const [isRegistration, setIsRegistration] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isAuthenticating, setIsAuthenticating] = useState(false)

  async function handleAuthentication() {
    
  }

  return (
    <>
    <h2 className='sign-up-text'>{isRegistration ? "Sign up" : "Login"}</h2>
    <p>{isRegistration ? "Create an account" : "Sign in to your accaunt"} </p>
    <input value={email} onchange={(e)=>{setEmail(e.target.value)}} placeholder='Email'/>
    <input value={password} onchange={(e)=>{setPassword(e.target.value)}} placeholder='********' type='password' />
    <button onClick={handleAuthentication}> <p>Submit </p> </button>
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
