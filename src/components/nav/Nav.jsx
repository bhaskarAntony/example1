import React from 'react'
import './style.css'

function Nav() {
  return (
    <div className='nav'>
    <div className="nav-left">
    <img src="https://1000logos.net/wp-content/uploads/2021/02/Flipkart-logo.png" alt="" />
      <ul>
            <li><a href="">Product</a></li>
            <li><a href="">MarketPlace</a></li>
            <li><a href="">Learn</a></li>
            <li><a href="">Resources</a></li>
      </ul>
    </div>
    <div className="nav-right">
        <a href="/">Log in</a>
        <button className="outline-btn">Contact sales</button>
        <button className="solid-btn">Get Started-it's Free</button>
    </div>
    
    </div>
  )
}

export default Nav
