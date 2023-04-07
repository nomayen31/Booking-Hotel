import React from 'react'
import'./mailList.css'

const MailList = () => {
    return (
      <div className="mail">
        <div className="mail-div">
        <h1 className="mailTitle">Get Special Offers And More From Travon</h1>
        <span className="mailDesc">Sign up now and get the best deals straight in your inbox!</span>
        <div className="mailInputContainer">
          <input type="text" placeholder="Your Email" />
          <button className="btn btn-active">Subscribe</button>
        </div>
          
        </div>
      </div>
    )
  }
  
export default MailList