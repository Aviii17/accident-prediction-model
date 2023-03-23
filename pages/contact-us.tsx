import React from 'react'
import NavBar from '../components/NavBar'
import { useAccident } from '../context/accidentContext'
const ContactUs = () => {
  return (
    <div>
      <NavBar />
      <h1 style={{ textAlign: 'center' }}>Contact Us</h1>
            <div style={{width:"100%", height:'100%', display:'flex', alignItems:'center', justifyContent:'center'}}>

                  
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd3j1rU31vVMid4ma_7BIvXnkbE_OrHz7KykpeqLht8HOShxA/viewform?embedded=true" width="650" height="1100">Loading…</iframe>
      </div>
      </div>
  )
}

export default ContactUs
