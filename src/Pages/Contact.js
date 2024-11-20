import React from 'react'
import '../Styles/contact.css'
import facebook from '../pictures/facebook.png'
import instagram from '../pictures/instagram.png'
import location from '../pictures/location.png'

function Contact() {
  return (
    <div>
      <div className="page3">
        <div className='connect'>
          <h2>Up for Grabbing a Pizzza?</h2>
          <button>Call Us</button>
        </div>
        <div className="social">
          <h2>Connect with us</h2>
          <div className='icon'>
            <img src={facebook} alt='facebook'/>
            <img src={instagram} alt='instagram'/>
          </div>
        </div>
        <div className="location">
          <h2>Our Location</h2>
          <img src={location} alt='location'/>
        </div>
      </div>
    </div>
  );
}

export default Contact;
