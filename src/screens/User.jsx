import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom/cjs/react-router-dom'
import { selectUser } from '../features/userSlice'
import './User.css'

const User = () => {
    const user = useSelector(selectUser)
    const history = useHistory();

  return (
    <div className='user'>
        <img className='logo' src='/images/netflix-logo.png' alt='logo' />
        <div className='container'>
            <div className='contents'>
                <h1 className='watching'>Who's Watching?</h1>
                <div className='user-info' onClick={() => history.push('/homescreen')}>
                    <img 
                        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' 
                        alt='profile-log' 
                        />
                    <h4 className='userEmail'>{user.email}</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default User