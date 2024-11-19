import React from 'react'

export default function Authentication() {
  return (
    <>
    <h2 className='sign-up-text'>Sign up / Login</h2>
    <p>Sign in to your accaunt</p>
    <input placeholder='Email'/>
    <input placeholder='********' type='password' />
    <button> <p>Submit </p> </button>
    <hr/>
    <div className='regster-content'>
      <p>Don't have an accaunt?</p>
      <button><p>Sign up</p></button>
    </div>
    </>
  )
}
