import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import './PlansScreen.css'

const PlansScreen = () => {
    const history = useHistory()

    const handleClick = () => {
        history.push('/')
    }



  return (
    <div className='plansScreen'>
       <div className='plansScreen__plan'>
           <div className='plansScreen__info'>
               <h5>Premium</h5>
               <h6>4K + HDR</h6>
           </div>
           <button onClick={handleClick}>₹649</button>
       </div>
       <div className='plansScreen__plan'>
           <div className='plansScreen__info'>
               <h5>Standard</h5>
               <h6>1080p</h6>
           </div>
           <button onClick={handleClick}>₹449</button>
       </div>
       <div className='plansScreen__plan'>
           <div className='plansScreen__info'>
               <h5>Basic</h5>
               <h6>480p</h6>
           </div>
           <button onClick={handleClick}>₹199</button>
       </div>
    </div>
  )
}

export default PlansScreen