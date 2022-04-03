import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { selectUser } from './features/userSlice'

import './Nav.css'

const Nav = () => {
    const [show, handleShow] = useState(false)
    const history = useHistory();
    const user = useSelector(selectUser)

    
    
    const transitionNavbar = () => {
      if(window.scrollY > 100) {
          handleShow(true)
      }
      else {
          handleShow(false)
      }
  }

  //runs once when component is mounted
  useEffect(() => {
      window.addEventListener('scroll', transitionNavbar) //attach an EventListener which runs transitionNavbar every time user scrolls
      return () => window.removeEventListener('scroll', transitionNavbar) //return function is run when component unmounts, cleaning up the EventListener
  }, [])
    

    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className="nav__contents">
                
                  <img
                    onClick={() => history.push('/')}
                    className='nav__logo'
                    src='/images/netflix-logo.png' 
                    alt='netflix logo' 
                  />
                  <span onClick={() => history.push("/profile")} className='nav__email'>{user.email}</span>
                  <img  
                    onClick={() => history.push("/profile")}        
                    className='nav__avatar'
                    src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' 
                    alt='' 
                  />
            
            </div>
        </div>
    )
}

export default Nav;