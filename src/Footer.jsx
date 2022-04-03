import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-contents'>
            <ul>
                <li className='first-child'>Questions? Contact us.</li>
                <li>FAQ</li>
                <li>Investor Reations</li>
                <li>Ways to Watch</li>
                <li>Corporate Information</li>
                <li>Netflix Originals</li>
                <li className='last-child'>Netflix India ©</li>
            </ul>
            <ul>
                <li>Help Center</li>
                <li>Jobs</li>
                <li>Terms of Use</li>
                <li>Contact US</li>
            </ul>
            <ul className='mobile-hidden2'>
                <li>Account</li>
                <li>Redeem Gift Card</li>
                <li>Privacy</li>
                <li>Speed Test</li>
            </ul>
            <ul className='mobile-hidden'>
                <li>Media Center</li>
                <li>Buy Gift Cards</li>
                <li>Cookie Prefrences</li>
                <li>Legal Notices</li>
            </ul>
        </div>
        
    </div>
  )
}

export default Footer