import React, { useState } from 'react'
import Footer from '../Footer';
import './LoginScreen.css'
import SignupScreen from './SignupScreen';


const LoginScreen = () => {
  const [sighIn, setSignIn] = useState(false);

  return (
    <><div className='loginScreen'>

      <div className='loginScreen__background'>
        <img
          className='loginScreen__logo'
          src='/images/netflix-logo.png'
          alt='Netflix logo' />
        <button className='loginSreen__button' onClick={() => setSignIn(true)}>
          Sign In
        </button>
        <div className='loginScreen__gradient' />
      </div>

      <div className="loginScreen__body">
        {sighIn ? (
          <SignupScreen />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at anytime</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

            <div className="loginScreen__input">
              <form>
                <input type='email' placeholder='Email Address' />
                <button className='loginScreen__getStarted' onClick={() => setSignIn(true)}>
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default LoginScreen;