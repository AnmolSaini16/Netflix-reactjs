import React, { useState } from 'react'
import { auth, signInWithGoogle } from '../firebase'
import './SignupScreen.css'

const SignupScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [signUp, setSignUp] = useState(false)

  const register = (e) => {
      e.preventDefault();
      auth.createUserWithEmailAndPassword(email,password)
      .then((authUser) => {
        console.log(authUser)
      })
      .catch(error => {
        alert(error.message)
      })
  }; 

  const signIn = (e) => {
      e.preventDefault()
      auth.signInWithEmailAndPassword(email, password)
      .then((authUser) => {
        console.log(authUser)
      })
      .catch(error => {
        alert(error.message)
      })
  };

  const signWithGoogle = (e) => {
    e.preventDefault()
    signInWithGoogle()
  }


  return (
    <div className='sighnupScreen'>
        <form>
            <h1>{ !signUp ? "Sign In" : "Sign Up"  }</h1>
            <input onChange={(e) => setEmail(e.target.value)} placeholder='Email' type='email' />
            <input onChange={(e) => setPassword(e.target.value)} placeholder='Password' type='password' />
            { !signUp ? <button className='signupScreen_button' type='submit' onClick={signIn} >Sign In</button> 
              : 
              <button type='submit' className='signupScreen_button' onClick={register} >Sign Up</button> 
             }
            

            <h4>
                <span className='signupScreen__grey'>New to Netflix? </span>
                <span className='signupScreen__link' onClick={() => setSignUp(true)}>Sign Up now.</span>
            </h4>
            <button onClick={signWithGoogle} className='signupScreen__google'>Sign In with Google<span></span></button>
        </form>
    </div>
  )
}

export default SignupScreen